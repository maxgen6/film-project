import SearchPage from './SearchPage';
import { connect } from 'react-redux';
import actions from '../../store/actions';

const mapStateToProps = (state) => ({
  cards: state.movies,
});

const mapDispatchToProps = (dispatch) => ({
  getAllMovies: () => dispatch(actions.movies.getAllMovies()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
