import { connect } from 'react-redux'
import FeatureBox from '../components/FeatureBox';

const mapStateToProps = state => ({	
	setRef: state.setRef.ref,
	setCompo: state.setRef.compo,
	refIndic: state.refIndic,
	url: state.setCar.url,
	infos: state.infoReducer.infos,
	infosCompare: state.infoReducer.infosCompare,
	loading: state.infoReducer.loading,
	error: state.infoReducer.error,
	territoire: state.setTerritoire,
	timeActivated: state.setTerritoire.timeCompare
})

const mapDispatchToProps = dispatch => {
	return {}
}

const Feature = connect(
	mapStateToProps,
	mapDispatchToProps
)(FeatureBox)

export default Feature