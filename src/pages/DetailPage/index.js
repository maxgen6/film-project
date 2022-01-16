import DetailPage from './DetailPage';

import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  currentFilm: state.movies.currentFilm,
  cards: state.movies.data,
});

// Comment Review 16.01.2020 - It's not required to pass mapDispatch to Props if it's null/empty
export default connect(mapStateToProps, null)(DetailPage);
