import {connect} from 'react-redux';
import TitreBox from '../components/TitreBox';
import { setShowEPCI } from '../actions'

const mapStateToProps = (state) => ({
	refIndic: state.refIndic,
	setRef: state.setRef.ref,
	territoire: state.setTerritoire,
})

const mapDispatchToProps = dispatch => {
  return {
    onShowEPCIClick: showEPCI => {
      dispatch(setShowEPCI(showEPCI));
    },
  }
}

const Titre = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TitreBox);

export default Titre;
