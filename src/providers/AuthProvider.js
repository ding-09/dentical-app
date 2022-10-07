import { useContext, createContext, useState, useEffect } from 'react';
import { getUser } from '../utils/user';

const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(getUser());

  const value = { user, setUser };
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
