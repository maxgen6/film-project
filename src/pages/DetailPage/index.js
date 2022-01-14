import DetailPage from './DetailPage';

import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  currentFilm: state.movies.currentFilm,
  cards: state.movies.data,
});

export default connect(mapStateToProps, null)(DetailPage);
