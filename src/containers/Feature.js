import { connect } from 'react-redux'
import FeatureBox from '../components/FeatureBox'
import { fetchInfo } from '../actions'

const mapStateToProps = state => ({	
	ref: state.setRef.ref,
	setCompo: state.setRef.compo,
	refIndic: state.refIndic,
	url: state.setCar.url,
	infos: state.infoReducer.infos,
	loading: state.infoReducer.loading,
	error: state.infoReducer.error
})

const mapDispatchToProps = dispatch => {
	return {
		onLoad: url => {
			dispatch(fetchInfo(url))
		}
	}
}

const Feature = connect(
	mapStateToProps,
	mapDispatchToProps
)(FeatureBox)

export default Feature