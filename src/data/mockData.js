// Mock certificate data
export const mockCertificates = [
  {
    id: 1,
    title: "B.Sc. Computer Science",
    issuer: "Hackathon University",
    date: "2025-09-01",
    status: "Active",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCzwAklSdWf6nD46b6kTyBd6fgI774GjNtbUjKzbFWt-kX-KkvQAZFRtaJ6C2lmFrpiAzaTgDpAetpSEQ8cocvZ5RqvwvJ2im0Uzr4JBTAfSuiERspqNmFAuacV3lHCpDEYrGhYfkFapgOWuqrBHF-_liq_O1QTN9ifAF_z35M7hGeFWrhLjebWbP5nUrhhA3je_xXRcYFlIVJL63t6_biFeNlItUWMFbMHnijf1gyNv1vtHdMVPi79hExZcp1rGhJa45LfGSBBBSF2"
  },
  {
    id: 2,
    title: "MBA Business Analytics",
    issuer: "Global University",
    date: "2024-12-15",
    status: "Revoked",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD4JQ2EfBoDKQR_3SHA0D2De6MxyJ8YttSJdOMxVy2GgGCyxJsWekTsHjcUGpFPUsGN1Gco5GWysBXcX_p8DE4M-ztAd_aOJxYbnAcZ_0nf1SK1a2jl08vEyecNbEXx0WFy0CKMTTFWdfFOHqbKbbOQu2gQd0LDcnHVsoos1G22oFw8cAg_DTQpzcIfUI676tkD3fFn-ILPrhBe44lYOr7DdxO_NZE-05PqYrC50lAsYFCwo_6JcozsseZ1yQ48R0maKERRpW5Q79nU"
  },
  {
    id: 3,
    title: "Blockchain Essentials",
    issuer: "Tech Academy",
    date: "2024-08-20",
    status: "Active",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAgycCnqkOp5x1WP6OtML2nEhLdSLlu08-h46C2BBOqVxcSEy_5-HPXuZj3Xlj3PHFX0zGqV07kVmM3D7pllioM8tS0yi8Wlgut-ZJtVmgueg7jKGbvs7D11JhKwajRhjRFbU7voAoFkkWh8YuWyMaVX58AEkpVnGJOATXkEHlTT4eYUWu4cvAlRgsUrkBe2h9NqkoF4auXpAY4_QG4h-CZ09bK3NHgYzQ7DP7YXO_Fh1zSvi-FisjOfCS2-O6vnrN4dSbsmQhBqiD_"
  },
  {
    id: 4,
    title: "Advanced Cryptography",
    issuer: "Crypto Institute",
    date: "2024-06-10",
    status: "Revoked",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBKsn2zGZ817kheU1-1wBo6diQU14Rd_Cp1Au0m-OPKDPmBS2ZTYYA2AR1SPuohApOPb3HD02j96EJ6cVgO_dvuFk-ANVq9Tejl5rBJFvIjYl8m_Fbh4EgItuQ3X_RmoqpQudfX9S7q6ztm2CymxjOmjmmvl9cgGMH6uLNR5U8iX8iNXoaOcfm7B1yfM4z5O83gqDDKZ80hN73kK-kuS8XA2388kAapdMWCu5McVSUovs-4yxYLe2lryXSIqTQjaKnvw9fYnS1D1TGp"
  },
  {
    id: 5,
    title: "Decentralized Finance",
    issuer: "Finance University",
    date: "2024-11-05",
    status: "Active",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCzIvh4mXL-Ski6Iaah06658SdeGGtyrU7JeEEZGyQwt1_P9jY6JbRjPPajk7Da5z9aynuGj6EkERy2M0FWt3wJLy82EjFJ-LOMDZHkobGCjwydKT5WOMqR3qBhApZxtjKVoHNyKPSCsFtHpoK3YNbKsjNNmfEwsmabZolhr4WTI-PUZmb_ClAgzfH_4PEmC1RCnJOzm6nz3hPBGhyyG-mVQi0f4iGPYBO3zQ0BXbDhAR6pU8IH4-YXHzs-hZUWHh25D2FyvEqF_KvZ"
  }
];

// Mock wallet addresses for verification
export const mockWalletCertificates = {
  "0x1234567890abcdef": [mockCertificates[0], mockCertificates[2]],
  "0xabcdef1234567890": [mockCertificates[1], mockCertificates[4]],
  "0x9876543210fedcba": [mockCertificates[3]]
};


