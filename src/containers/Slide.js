import {connect} from 'react-redux'
import { setCompo } from '../actions'
import SlideBox from '../components/SlideBox'

const mapStateToProps = (state) => ({	
	setRef: state.setRef.ref,
	territoire: state.setTerritoire
})

// const mapDispatchToProps = dispatch => {
// 	return {
// 		onCompoClick: key => {
// 			dispatch(setCompo(key))
// 		}
// 	}
// }
const Slide = connect(
	mapStateToProps
	// , mapDispatchToProps
)(SlideBox)
export default Slide