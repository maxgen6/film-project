import * as t from '../types';
import api from '../../api';

const getAllMovies = () => (dispatch) => {
  return api.movies
    .getAllMovies()
    .then((response) => {
      const { data, status } = response;

      // Comment Review 16.01.2020 - It's better to check the exact statuses or status which is not acceptable
      // Like [200, 201. ...].includes(status) or ![404, 500, ...].includes(status)
      if (status < 300) {
        dispatch({
          type: t.GET_ALL_MOVIES,
          payload: data,
        });

        return response;
      }
    })
    .catch((error) => console.error(error));
};

const setFilm = (data) => (dispatch) => {
  dispatch({
    type: t.SET_FILM,
    payload: data,
  });
};

export { getAllMovies, setFilm };
