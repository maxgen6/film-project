import axios from 'axios';


/*
  Comment Review 16.01.2020
   Let's also add Auth header to our requests to simulate real behaviour
   We can do it using "interceptors"
   See the example bellow:
   service.interceptors.request.use(function(config) {
      const token = '123'; // get Token here

      // check if we don't have a token then just return config
      ...
      // if token is not empty then return config with additional header...
      return {
        ...config,
        headers: {
          ...config.headers,
          Authorization: token
        }
      };
  });


  Let's also add "interceptor" for response
  It will be the same as for "request" above but for "response"
  It accepts 2 functions(onFulfilled, onRejected), the similar as Promise does
  For onFulfilled we can just pass response => response, as we are not interested here
  For onRejected we get "error" object as an incoming param and we can check
  - if status of the response is not 401 then we return Promise.reject with error,
  - if  that's not an initial route, then we can force logout


  We can also extend out service with all methods like and also add additional verification for parse responseData if that's a string
  Then we can export that api from that file and use it like
  api.get('/movies');
  const api = {
    get: (url, config) =>
    instance.get(url, {
      transformResponse: [
        responseData =>
          typeof responseData === 'string'
            ? JSON.parse(responseData)
            : responseData
      ],
      ...config
    }),
  }
 */

const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  data: {},
  timeout: 180000,
});

export default instance;
