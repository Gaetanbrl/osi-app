import { connect } from 'react-redux'
import Carlitto from '../components/Carlitto'
import {
	setCar,
	setLegendUrl,
	setNavigationView,
	fetchInfo,
	setEnableTimeCompare,
	setTimeCompare,
	displayResponsiveModal
} from '../actions'

const mapStateToProps = state => ({
	territoire: state.setTerritoire.comm,
	navigationType: state.setTerritoire.navigationType,
	navigationView: state.setTerritoire.navigationView,
	legendUrl: state.setTerritoire.legendUrl,
	setRef: state.setRef.ref,
	infos: state.infoReducer.infos,
	infosCompare: state.infoReducer.infosCompare,
	url: state.setCar.url,
	urlCompare: state.setCar.urlCompare,
	timeActivated: state.setTerritoire.timeCompare,
	responsiveModal: state.mainAppReducer.responsiveModal
})

const mapDispatchToProps = dispatch => {
	return {
		onCarClick: (url, urlCompare) => {
			dispatch(setCar(url, urlCompare))
		},
		onSetLegendUrl: legendUrl => {
			dispatch(setLegendUrl(legendUrl))
		},
		onSetNavigationView: navigationView => {
			dispatch(setNavigationView(navigationView))
		},
		onLoad: (url, urlCompare) => {
			dispatch(fetchInfo(url, urlCompare))
		},
		onEnableTimeCompare: enable => dispatch(setEnableTimeCompare(enable)),
		onTimeCompareChange: activate => {
			dispatch(setTimeCompare(activate))
		},
		changeModal: (id) => dispatch(displayResponsiveModal(id))
	}
}

const Carto = connect(
	mapStateToProps,
	mapDispatchToProps
)(Carlitto)

export default Carto
