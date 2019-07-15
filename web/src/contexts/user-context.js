import React, { createContext, useContext, useState } from 'react';

const UserStateContext = createContext();
const UserDispatchContext = createContext();

const UserProvider = ({ children }) => {
  const [username, setUsername] = useState(null);
  const [token, setToken] = useState(null);

  const login = (username, token) => {
    setUsername(username);
    setToken(token);
  };

  const logout = () => {
    setUsername(null);
    setToken(null);
  };

  return (
    <UserStateContext.Provider value={{ username, token }}>
      <UserDispatchContext.Provider value={{ login, logout }}>
        {children}
      </UserDispatchContext.Provider>
    </UserStateContext.Provider>
  );
};

const useUserState = () => {
  const context = useContext(UserStateContext);
  if (context === undefined) {
    throw new Error('useUserState must be used within a UserProvider');
  }
  return context;
};

const useUserDispatch = () => {
  const context = useContext(UserDispatchContext);
  if (context === undefined) {
    throw new Error('useUserDispatch must be used within a UserProvider');
  }
  return context;
};

const useUser = () => {
  return [useUserState(), useUserDispatch()];
};

export { UserProvider, useUser };
