// src/lib/api/services/local.ts
export const saveTermsAgreement = (hasAgreed: boolean): void => {
    if (typeof window !== "undefined") {
      localStorage.setItem("hasAgreedToTerms", hasAgreed.toString());
    }
  };
  
  export const getTermsAgreement = (): boolean => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("hasAgreedToTerms");
      return stored === "true";
    }
    return false;
  };
  
  export const saveUserRole = (role: string): void => {
    if (typeof window !== "undefined") {
      localStorage.setItem("userRole", role);
    }
  };
  
  export const getUserRole = (): string | null => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("userRole");
    }
    return null;
  };
  
  export const removeUserRole = (): void => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("userRole");
    }
  };
  