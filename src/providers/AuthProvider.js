import { useContext, createContext, useState } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const value = '';
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// use AuthContext
const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};

export { AuthProvider, useAuth };
