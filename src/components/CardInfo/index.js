import { connect } from 'react-redux';

import actions from 'store/actions';
import CardInfo from './CardInfo';

const mapDispatchToProps = (dispatch) => ({
  setFilm: (data) => dispatch(actions.movies.setFilm(data)),
});

export default connect(null, mapDispatchToProps)(CardInfo);
