import {connect} from 'react-redux';
import TitreBox from '../components/TitreBox';
import { setShowEPCI, setNavigationType } from '../actions'

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
    onChangeNavigationClick: navigationType => {
      dispatch(setNavigationType(navigationType))
    }
  }
}

const Titre = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TitreBox);

export default Titre;
