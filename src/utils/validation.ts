// src/utils/validation.ts
export const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };
  
  export const validateMobileNumber = (mobileNumber: string) => {
    const re = /^[0-9]{10}$/;
    return re.test(mobileNumber);
  };
  
  export const validatePassword = (password: string) => {
    return password.length >= 6;
  };
  