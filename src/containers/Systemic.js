import {connect} from 'react-redux'
import { setCompo } from '../actions'
import Compo from '../components/Compo'

const mapStateToProps = (state) => ({	
	refIndic: state.refIndic,
	setCompo: state.setRef.compo,
	territoire: state.setTerritoire
})

const mapDispatchToProps = dispatch => {
	return {
		onCompoClick: key => {
			dispatch(setCompo(key))
		}
	}
}
const Systemic = connect(
	mapStateToProps,
	mapDispatchToProps
)(Compo)
export default Systemic