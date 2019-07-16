import React, { createContext, useContext, useReducer, useEffect } from 'react';
import jwtDecode from 'jwt-decode';

import * as api from '../api';

const UserStateContext = createContext();
const UserDispatchContext = createContext();

const storageKey = 'user';

const types = {
  loginRequest: 'loginRequest',
  loginSuccess: 'loginSuccess',
  loginFailure: 'loginFailure',
  logout: 'logout',
};

const loadInitialState = () => JSON.parse(localStorage.getItem(storageKey));

const initialState = {
  username: null,
  token: null,
  isFetching: null,
  error: null,
};

const userReducer = (state, action) => {
  switch (action.type) {
    case types.loginRequest:
      return {
        ...state,
        isFetching: true,
        error: null,
      };
    case types.loginSuccess:
      return {
        ...state,
        isFetching: false,
        username: action.payload.username,
        token: action.payload.token,
      };
    case types.loginFailure:
      return {
        ...state,
        isFetching: false,
        error: action.payload.error,
      };
    case types.logout:
      return { ...initialState };
    default:
      throw new Error(`Unhandled type: ${action.type}`);
  }
};

const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    userReducer,
    loadInitialState() || initialState
  );

  useEffect(() => {
    const hasLoggedIn = state.token !== null;
    const hasLoggedOut = state.token === null;

    if (hasLoggedIn) {
      localStorage.setItem(storageKey, JSON.stringify(state));
      api.setToken(state.token);
    }

    if (hasLoggedOut) {
      localStorage.removeItem(storageKey);
      api.setToken(null);
    }
  }, [state]);

  const login = async (username, password) => {
    dispatch({ type: types.loginRequest });
    try {
      const response = await api.login({ username, password });

      if (response.error) {
        throw new Error(response.error.msg);
      }

      const decodedJwt = jwtDecode(response.token);
      dispatch({
        type: types.loginSuccess,
        payload: { username: decodedJwt.username, token: response.token },
      });
    } catch (error) {
      const message = error.message || 'Error';
      dispatch({ type: types.loginFailure, payload: { error: message } });
    }
  };

  const logout = async () => {
    api.logout();
    dispatch({ type: types.logout });
  };

  return (
    <UserStateContext.Provider value={state}>
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
