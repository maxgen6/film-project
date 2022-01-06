import http from './http';

function getAllMovies() {
  return http({
    url: 'movies',
    method: 'GET',
  });
}

export { getAllMovies };
