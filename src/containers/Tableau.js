import { connect } from 'react-redux'
import { setRef } from '../actions'
import IndicList from '../components/IndicList'

const mapStateToProps = (state) => ({
	refIndic: state.refIndic,
	setCompo: state.setRef.compo,
	currentIndic: state.setRef.ref,
	territoire: state.setTerritoire
})

const mapDispatchToProps = dispatch => {
	return {
		onIndicClick: key => {
			dispatch(setRef(key))
		}
	}
}

const Tableau = connect(
	mapStateToProps,
	mapDispatchToProps
)(IndicList)
export default Tableau
