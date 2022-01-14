import * as t from '../types';

const initialState = {
  data: [],
  currentFilm: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case t.GET_ALL_MOVIES:
      return {
        ...state,
        data: action.payload.data,
      };
    case t.SET_FILM:
      return {
        ...state,
        currentFilm: action.payload,
      };
    default:
      return state;
  }
};
