import SearchPage from 'pages/SearchPage';
import LoginPage from 'pages/LoginPage';
import AuthorizationPage from 'pages/AuthorizationPage';
import DetailPage from 'pages/DetailPage';
import NotPage from 'pages/NotPage';

export const ROUTES = [
  {
    root: '/',
    component: SearchPage,
    private: true,
    exact: true,
  },
  {
    root: '/login',
    component: LoginPage,
    private: false,
    exact: false,
  },
  {
    root: '/register',
    component: AuthorizationPage,
    private: false,
    exact: false,
  },
  {
    root: '/search-film/:id',
    component: DetailPage,
    private: true,
    exact: false,
  },
  {
    root: '',
    component: NotPage,
    private: false,
    exact: false,
  },
];
