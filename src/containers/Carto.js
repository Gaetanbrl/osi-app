import { connect } from 'react-redux'
import Carlitto from '../components/Carlitto'
import { setEpci, setCar, setComm, setShowAllComm } from '../actions'

const mapStateToProps = state => ({
	territoire: state.setTerritoire.comm,
	showAllComm: state.setTerritoire.showAllComm,
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
		onShowAllCommClick: showAllComm => {
			dispatch(setShowAllComm(showAllComm))
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
