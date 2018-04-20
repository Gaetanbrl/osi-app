import { connect } from 'react-redux'
import { setEpci, setComm } from '../actions'
import Local from '../components/Local'

const mapStateToProps = state => ({	
	territoire: state.setTerritoire
})

const mapDispatchToProps = dispatch => {
	return {
		onEpciClick: id => {
			dispatch(setEpci(id))
    	},
  	onCommClick: id => {
			dispatch(setComm(id))
    	},

  	}
}

const Territoire = connect(
  mapStateToProps,
  mapDispatchToProps
)(Local)
export default Territoire