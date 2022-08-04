import { connect } from 'react-redux'
import Carlitto from '../components/Carlitto'
import { setEpci, setCar, setComm } from '../actions'

const mapStateToProps = state => ({
	territoire: state.setTerritoire.comm,
	epci: state.setTerritoire.epci,
	showEPCI: state.setTerritoire.showEPCI,
	navigationType: state.setTerritoire.navigationType,
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
		}
	}
}

const Carto = connect(
	mapStateToProps,
	mapDispatchToProps
)(Carlitto)

export default Carto
