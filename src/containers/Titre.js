import {connect} from 'react-redux';
import TitreBox from '../components/TitreBox';
import { setTimeCompare } from '../actions'

const mapStateToProps = (state) => ({
	refIndic: state.refIndic,
	setRef: state.setRef.ref,
  territoire: state.setTerritoire,
  enableTimeCompare: state.setTerritoire.enableTimeCompare,
	timeActivated: state.setTerritoire.timeCompare
})

const mapDispatchToProps = dispatch => {
  return {
    onTimeCompareChange: activate => {
      dispatch(setTimeCompare(activate))
    }
  }
}

const Titre = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TitreBox);

export default Titre;
