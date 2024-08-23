// src/services/AuthService.ts
interface User {
    fullName: string;
    email: string;
    mobileNumber: string;
    password: string;
  }
  
  const users: User[] = [];
  
  export const registerUser = (user: User): boolean => {
    const existingUser = users.find(u => u.mobileNumber === user.mobileNumber);
    if (existingUser) {
      return false; // User already exists
    }
    users.push(user);
    return true;
  };
  
  export const loginUser = (mobileNumber: string, password: string): boolean => {
    const user = users.find(u => u.mobileNumber === mobileNumber && u.password === password);
    return !!user;
  };
  