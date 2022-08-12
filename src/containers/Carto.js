import { connect } from 'react-redux'
import Carlitto from '../components/Carlitto'
import { setEpci, setCar, setComm, setLegendUrl } from '../actions'

const mapStateToProps = state => ({
	territoire: state.setTerritoire.comm,
	epci: state.setTerritoire.epci,
	showEPCI: state.setTerritoire.showEPCI,
	navigationType: state.setTerritoire.navigationType,
	legendUrl: state.setTerritoire.legendUrl,
	setRef: state.setRef.ref,
	infos: state.infoReducer.infos
})

const mapDispatchToProps = dispatch => {
	return {
		onEpciClick: id => {
			dispatch(setEpci(id))
		},
		onCommClick: id => {
			dispatch(setComm(id))
		},
		onCarClick: key => {
			dispatch(setCar(key))
		},
		onSetLegendUrl: legendUrl => {
			dispatch(setLegendUrl(legendUrl))
		}
	}
}

const Carto = connect(
	mapStateToProps,
	mapDispatchToProps
)(Carlitto)

export default Carto
