// Performance monitoring utilities
export const performanceMonitor = {
  // Measure component render time
  measureRender: (componentName) => {
    const start = performance.now();
    return () => {
      const end = performance.now();
      const duration = end - start;
      console.log(`${componentName} render time: ${duration.toFixed(2)}ms`);
      return duration;
    };
  },

  // Measure API call performance
  measureApiCall: async (apiName, apiCall) => {
    const start = performance.now();
    try {
      const result = await apiCall();
      const end = performance.now();
      const duration = end - start;
      console.log(`${apiName} API call time: ${duration.toFixed(2)}ms`);
      return result;
    } catch (error) {
      const end = performance.now();
      const duration = end - start;
      console.log(`${apiName} API call failed after: ${duration.toFixed(2)}ms`);
      throw error;
    }
  },

  // Measure memory usage
  measureMemory: () => {
    if ('memory' in performance) {
      const memory = performance.memory;
      console.log('Memory usage:', {
        used: `${(memory.usedJSHeapSize / 1024 / 1024).toFixed(2)} MB`,
        total: `${(memory.totalJSHeapSize / 1024 / 1024).toFixed(2)} MB`,
        limit: `${(memory.jsHeapSizeLimit / 1024 / 1024).toFixed(2)} MB`
      });
    }
  },

  // Debounce function for performance
  debounce: (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  },

  // Throttle function for performance
  throttle: (func, limit) => {
    let inThrottle;
    return function executedFunction(...args) {
      if (!inThrottle) {
        func.apply(this, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  }
};

// Performance observer for monitoring
export const initPerformanceObserver = () => {
  if ('PerformanceObserver' in window) {
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'measure') {
          console.log(`${entry.name}: ${entry.duration.toFixed(2)}ms`);
        }
      }
    });
    
    observer.observe({ entryTypes: ['measure'] });
    return observer;
  }
  return null;
};

export default performanceMonitor;
