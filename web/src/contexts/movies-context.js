import React, { createContext, useContext, useReducer } from 'react';
import merge from 'lodash/fp/merge';
import keyBy from 'lodash/fp/keyBy';
import map from 'lodash/fp/map';
import union from 'lodash/fp/union';

import * as api from '../api';

const MoviesStateContext = createContext();
const MoviesDispatchContext = createContext();

const types = {
  getMoviesRequest: 'getMoviesRequest',
  getMoviesSuccess: 'getMoviesSuccess',
  getMoviesFailure: 'getMoviesFailure',
  getMovieByIdRequest: 'getMovieByIdRequest',
  getMovieByIdSuccess: 'getMovieByIdSuccess',
  getMovieByIdFailure: 'getMovieByIdFailure',
  updateMovieRequest: 'updateMovieRequest',
  updateMovieSuccess: 'updateMovieSuccess',
  updateMovieFailure: 'updateMovieFailure',
  createMovieRequest: 'createMovieRequest',
  createMovieSuccess: 'createMovieSuccess',
  createMovieFailure: 'createMovieFailure',
};

const initialState = {
  byId: {},
  allIds: [],
  isFetching: false,
  error: null,
};

const moviesReducer = (state, action) => {
  switch (action.type) {
    case types.getMoviesRequest:
      return {
        ...state,
        isFetching: true,
        error: null,
      };
    case types.getMoviesSuccess: {
      const byId = keyBy('id', action.payload.movies);
      const allIds = map('id', action.payload.movies);

      return {
        ...state,
        isFetching: false,
        byId: merge(state.byId, byId),
        allIds: union(allIds, state.allIds),
      };
    }
    case types.getMoviesFailure:
      return {
        ...state,
        isFetching: false,
        error: action.payload.error,
      };
    case types.getMovieByIdRequest:
      return {
        ...state,
        isFetching: true,
        error: null,
      };
    case types.getMovieByIdSuccess: {
      const id = action.payload.movie.id;

      return {
        ...state,
        isFetching: false,
        byId: merge(state.byId, { [id]: action.payload.movie }),
        allIds: union([id], state.allIds),
      };
    }
    case types.getMovieByIdFailure:
      return {
        ...state,
        isFetching: false,
        error: action.payload.error,
      };
    case types.updateMovieRequest:
      return {
        ...state,
        isFetching: true,
        error: null,
      };
    case types.updateMovieSuccess:
      return {
        ...state,
        isFetching: false,
        byId: merge(state.byId, {
          [action.payload.movie.id]: action.payload.movie,
        }),
      };
    case types.updateMovieFailure:
      return {
        ...state,
        isFetching: false,
        error: action.payload.error,
      };
    case types.createMovieRequest:
      return {
        ...state,
        isFetching: true,
        error: null,
      };
    case types.createMovieSuccess:
      return {
        ...state,
        isFetching: false,
        byId: merge(state.byId, {
          [action.payload.movie.id]: action.payload.movie,
        }),
        allIds: union([action.payload.movie.id], state.allIds),
      };
    case types.createMovieFailure:
      return {
        ...state,
        isFetching: false,
        error: action.payload.error,
      };
    default:
      throw new Error(`Unhandled type: ${action.type}`);
  }
};

const MoviesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(moviesReducer, initialState);

  const getMovies = async () => {
    dispatch({ type: types.getMoviesRequest });
    try {
      const response = await api.getMovies();

      if (response.error) {
        throw new Error(response.error.msg);
      }

      dispatch({ type: types.getMoviesSuccess, payload: { movies: response } });
    } catch (error) {
      const message = error.message || 'Error';
      dispatch({ type: types.getMoviesFailure, payload: { error: message } });
    }
  };

  const getMovieById = async id => {
    dispatch({ type: types.getMovieByIdRequest });
    try {
      const response = await api.getMovieById(id);

      if (response.error) {
        throw new Error(response.error.msg);
      }

      dispatch({
        type: types.getMovieByIdSuccess,
        payload: { movie: response },
      });
    } catch (error) {
      const message = error.message || 'Error';
      dispatch({
        type: types.getMovieByIdFailure,
        payload: { error: message },
      });
    }
  };

  const updateMovie = async (
    id,
    { title, plot, releaseDate, posterUrl, trailerUrl, actors, genres }
  ) => {
    dispatch({ type: types.updateMovieRequest });
    try {
      const response = await api.updateMovie(id, {
        title,
        plot,
        releaseDate,
        posterUrl,
        trailerUrl,
        actors,
        genres,
      });

      if (response.error) {
        throw new Error(response.error.msg);
      }

      if (response.errors) {
        throw new Error(response.errors[0].msg);
      }

      dispatch({
        type: types.updateMovieSuccess,
        payload: { movie: response },
      });
    } catch (error) {
      const message = error.message || 'Error';
      dispatch({
        type: types.updateMovieFailure,
        payload: { error: message },
      });
      return { error: { message } };
    }
  };

  return (
    <MoviesStateContext.Provider value={state}>
      <MoviesDispatchContext.Provider
        value={{ getMovies, getMovieById, updateMovie }}
      >
        {children}
      </MoviesDispatchContext.Provider>
    </MoviesStateContext.Provider>
  );
};

const useMoviesState = () => {
  const context = useContext(MoviesStateContext);
  if (context === undefined) {
    throw new Error('useMoviesState must be used within a MoviesProvider');
  }
  return context;
};

const useMoviesDispatch = () => {
  const context = useContext(MoviesDispatchContext);
  if (context === undefined) {
    throw new Error('useMoviesDispatch must be used within a MoviesProvider');
  }

  return context;
};

const useMovies = () => {
  return [useMoviesState(), useMoviesDispatch()];
};

export { MoviesProvider, useMovies };
