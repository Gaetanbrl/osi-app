import {connect} from 'react-redux'
import MetaBox from '../components/MetaBox'
import {
	displayResponsiveModal
} from '../actions'
const mapStateToProps = (state) => {
	return {
		responsiveModal: state.mainAppReducer.responsiveModal,
		refIndic: state.refIndic,
		setRef: state.setRef.ref,
		territoire: state.setTerritoire,
		navigationType: state.navigationType,
		navigationView: state.navigationView,
		legendUrl: state.legendUrl
	}	
}

const mapDispatchToProps = dispatch => {
	return {
		changeModal: (id) => dispatch(displayResponsiveModal(id))
	}
}

const Meta = connect(
	mapStateToProps,
	mapDispatchToProps
)(MetaBox)

export default Meta