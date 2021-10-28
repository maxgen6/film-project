import React from 'react';
import SearchPage from 'pages/SearchPage';
import DetailPage from 'pages/DetailPage';

function App() {
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

  return (
    <>
      <DetailPage cardData={cardData} />
    </>
  );
}

export default App;
