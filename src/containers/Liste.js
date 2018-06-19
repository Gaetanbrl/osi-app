import {connect} from 'react-redux'
// import { setEpci, setComm } from '../actions'
import ListeBox from '../components/ListeBox'

const mapStateToProps = (state) => ({	
	refIndic: state.refIndic,
	setRef: state.setRef.ref,
	territoire: state.setTerritoire
})

// const mapDispatchToProps = dispatch => {
// 	return {
// 		onEpciClick: id => {
// 			dispatch(setEpci(id))
//     	},
// 	  	onCommClick: id => {
// 			dispatch(setComm(id))
//     	}
//   	}
// }

const Liste = connect(
  mapStateToProps,
)(ListeBox)

export default Liste