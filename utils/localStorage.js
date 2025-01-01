export function getLocalStorage(key) {
    if (typeof window !== "undefined") {
      return JSON.parse(localStorage.getItem(key)) || {};
    }
  }
  
  export function setLocalStorage(key, value) {
    if (typeof window !== "undefined") {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }