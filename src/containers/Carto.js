import { connect } from 'react-redux'
import Carlitto from '../components/Carlitto'
import { setCar } from '../actions'

const mapStateToProps = state => ({	
	territoire: state.setTerritoire.comm,
	setRef: state.setRef.ref,
	infos: state.infoReducer.infos
})

const mapDispatchToProps = dispatch => {
	return {
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