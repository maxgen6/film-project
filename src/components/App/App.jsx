import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SearchPage from 'pages/SearchPage';
import DetailPage from 'pages/DetailPage';
import NotPage from 'pages/NotPage';
import Login from 'pages/Login';
import Authorization from 'pages/Authorization';
import PrivateRoute from '../PrivateRoute';

const cardData = [
  {
    id: 354912,
    title: 'Coco',
    tagline: 'The celebration of a lifetime',
    vote_average: 7.8,
    vote_count: 3619,
    release_date: '2017-10-27',
    poster_path: 'https://image.tmdb.org/t/p/w500/eKi8dIrr8voobbaGzDpe8w0PVbC.jpg',
    overview:
      'Despite his family’s baffling generations-old ban on music, Miguel dreams of' +
      ' becoming an accomplished musician like his idol, Ernesto de la Cruz. Desperate' +
      ' to prove his talent, Miguel finds himself in the stunning and colorful Land of' +
      ' the Dead following a mysterious chain of events. Along the way, he meets charming' +
      ' trickster Hector, and together, they set off on an extraordinary journey to unlock' +
      ' the real story behind Miguel`s family history.',
    budget: 175000000,
    revenue: 700920729,
    genres: ['Adventure', 'Comedy', 'Family', 'Animation'],
    runtime: 105,
  },
  {
    id: 354913,
    title: 'Coco',
    tagline: 'The celebration of a lifetime',
    vote_average: 7.8,
    vote_count: 3619,
    release_date: '2017-10-27',
    poster_path: 'https://image.tmdb.org/t/p/w500/eKi8dIrr8voobbaGzDpe8w0PVbC.jpg',
    overview:
      'Despite his family’s baffling generations-old ban on music, Miguel dreams of' +
      ' becoming an accomplished musician like his idol, Ernesto de la Cruz. Desperate' +
      ' to prove his talent, Miguel finds himself in the stunning and colorful Land of' +
      ' the Dead following a mysterious chain of events. Along the way, he meets charming' +
      ' trickster Hector, and together, they set off on an extraordinary journey to unlock' +
      ' the real story behind Miguel`s family history.',
    budget: 175000000,
    revenue: 700920729,
    genres: ['Adventure', 'Comedy', 'Family', 'Animation'],
    runtime: 105,
  },
  {
    id: 354914,
    title: 'Coco',
    tagline: 'The celebration of a lifetime',
    vote_average: 7.8,
    vote_count: 3619,
    release_date: '2017-10-27',
    poster_path: 'https://image.tmdb.org/t/p/w500/eKi8dIrr8voobbaGzDpe8w0PVbC.jpg',
    overview:
      'Despite his family’s baffling generations-old ban on music, Miguel dreams of' +
      ' becoming an accomplished musician like his idol, Ernesto de la Cruz. Desperate' +
      ' to prove his talent, Miguel finds himself in the stunning and colorful Land of' +
      ' the Dead following a mysterious chain of events. Along the way, he meets charming' +
      ' trickster Hector, and together, they set off on an extraordinary journey to unlock' +
      ' the real story behind Miguel`s family history.',
    budget: 175000000,
    revenue: 700920729,
    genres: ['Adventure', 'Comedy', 'Family', 'Animation'],
    runtime: 105,
  },
  {
    id: 3549124,
    title: 'Coco',
    tagline: 'The celebration of a lifetime',
    vote_average: 7.8,
    vote_count: 3619,
    release_date: '2017-10-27',
    poster_path: 'https://image.tmdb.org/t/p/w500/eKi8dIrr8voobbaGzDpe8w0PVbC.jpg',
    overview:
      'Despite his family’s baffling generations-old ban on music, Miguel dreams of' +
      ' becoming an accomplished musician like his idol, Ernesto de la Cruz. Desperate' +
      ' to prove his talent, Miguel finds himself in the stunning and colorful Land of' +
      ' the Dead following a mysterious chain of events. Along the way, he meets charming' +
      ' trickster Hector, and together, they set off on an extraordinary journey to unlock' +
      ' the real story behind Miguel`s family history.',
    budget: 175000000,
    revenue: 700920729,
    genres: ['Adventure', 'Comedy', 'Family', 'Animation'],
    runtime: 105,
  },
  {
    id: 3549126,
    title: 'Coco',
    tagline: 'The celebration of a lifetime',
    vote_average: 7.8,
    vote_count: 3619,
    release_date: '2017-10-27',
    poster_path: 'https://image.tmdb.org/t/p/w500/eKi8dIrr8voobbaGzDpe8w0PVbC.jpg',
    overview:
      'Despite his family’s baffling generations-old ban on music, Miguel dreams of' +
      ' becoming an accomplished musician like his idol, Ernesto de la Cruz. Desperate' +
      ' to prove his talent, Miguel finds himself in the stunning and colorful Land of' +
      ' the Dead following a mysterious chain of events. Along the way, he meets charming' +
      ' trickster Hector, and together, they set off on an extraordinary journey to unlock' +
      ' the real story behind Miguel`s family history.',
    budget: 175000000,
    revenue: 700920729,
    genres: ['Adventure', 'Comedy', 'Family', 'Animation'],
    runtime: 105,
  },
  {
    id: 3549121,
    title: 'Coco',
    tagline: 'The celebration of a lifetime',
    vote_average: 7.8,
    vote_count: 3619,
    release_date: '2017-10-27',
    poster_path: 'https://image.tmdb.org/t/p/w500/eKi8dIrr8voobbaGzDpe8w0PVbC.jpg',
    overview:
      'Despite his family’s baffling generations-old ban on music, Miguel dreams of' +
      ' becoming an accomplished musician like his idol, Ernesto de la Cruz. Desperate' +
      ' to prove his talent, Miguel finds himself in the stunning and colorful Land of' +
      ' the Dead following a mysterious chain of events. Along the way, he meets charming' +
      ' trickster Hector, and together, they set off on an extraordinary journey to unlock' +
      ' the real story behind Miguel`s family history.',
    budget: 175000000,
    revenue: 700920729,
    genres: ['Adventure', 'Comedy', 'Family', 'Animation'],
    runtime: 105,
  },
];
/*
  1) Use const for Routes and use across the app
  // constants/routes.js
  const ROUTES = {
  root: '/',
  login: '/login',
  ...
  };
  2) The same name for page components ...Page
  3) Login and Signup actions would be better to move to api/auth folder
  4) Create property file for i18n with english texts and connect it to the app
 */
function App() {
  return (
    <>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Authorization} />
        <PrivateRoute exact path="/" component={() => <SearchPage cardData={cardData} />} />
        <PrivateRoute
          path="/search-film/:id"
          component={() => <DetailPage cardData={cardData} />}
        />
        <Route component={NotPage} />
      </Switch>
    </>
  );
}

export default App;
