import React, { createContext, useState, useContext, useEffect } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const logout = () => {
    console.log('Logging out...');
    localStorage.removeItem('user');
    setUser(null);
    console.log('User set to null and removed from localStorage');
  };

  return (
    <UserContext.Provider value={{ user, setUser, logout, loading }}>
      {!loading && children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};
