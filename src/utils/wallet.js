import { ethers } from 'ethers';

// Check if MetaMask is installed
export const isMetaMaskInstalled = () => {
  return typeof window.ethereum !== 'undefined';
};

// Connect to MetaMask wallet
export const connectWallet = async () => {
  try {
    if (!isMetaMaskInstalled()) {
      throw new Error('MetaMask is not installed. Please install MetaMask to continue.');
    }

    // Request account access
    const accounts = await window.ethereum.request({
      method: 'eth_requestAccounts',
    });

    if (accounts.length === 0) {
      throw new Error('No accounts found. Please make sure MetaMask is unlocked.');
    }

    // Get the provider and signer
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    const address = await signer.getAddress();
    const network = await provider.getNetwork();

    // Check if connected to Sepolia testnet
    if (network.chainId !== BigInt(11155111)) { // Sepolia chain ID
      try {
        // Request to switch to Sepolia
        await window.ethereum.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: '0xaa36a7' }], // Sepolia chain ID in hex
        });
      } catch (switchError) {
        // If Sepolia is not added, add it
        if (switchError.code === 4902) {
          await window.ethereum.request({
            method: 'wallet_addEthereumChain',
            params: [{
              chainId: '0xaa36a7',
              chainName: 'Sepolia',
              rpcUrls: ['https://sepolia.infura.io/v3/'],
              nativeCurrency: {
                name: 'SepoliaETH',
                symbol: 'ETH',
                decimals: 18,
              },
              blockExplorerUrls: ['https://sepolia.etherscan.io/'],
            }],
          });
        } else {
          throw switchError;
        }
      }
    }

    return {
      address,
      provider,
      signer,
      network: network.name,
      chainId: network.chainId.toString(),
    };
  } catch (error) {
    console.error('Wallet connection error:', error);
    throw error;
  }
};

// Get current wallet connection status
export const getWalletStatus = async () => {
  try {
    if (!isMetaMaskInstalled()) {
      return { connected: false, error: 'MetaMask not installed' };
    }

    const accounts = await window.ethereum.request({
      method: 'eth_accounts',
    });

    if (accounts.length === 0) {
      return { connected: false, error: 'No accounts connected' };
    }

    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    const address = await signer.getAddress();
    const network = await provider.getNetwork();

    return {
      connected: true,
      address,
      network: network.name,
      chainId: network.chainId.toString(),
    };
  } catch (error) {
    console.error('Wallet status error:', error);
    return { connected: false, error: error.message };
  }
};

// Listen for account changes
export const onAccountsChanged = (callback) => {
  if (isMetaMaskInstalled()) {
    window.ethereum.on('accountsChanged', callback);
  }
};

// Listen for chain changes
export const onChainChanged = (callback) => {
  if (isMetaMaskInstalled()) {
    window.ethereum.on('chainChanged', callback);
  }
};

// Remove event listeners
export const removeWalletListeners = () => {
  if (isMetaMaskInstalled()) {
    window.ethereum.removeAllListeners('accountsChanged');
    window.ethereum.removeAllListeners('chainChanged');
  }
};
