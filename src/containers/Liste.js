import {connect} from 'react-redux'
import ListeBox from '../components/ListeBox'

const mapStateToProps = (state) => ({
	refIndic: state.refIndic,
	setRef: state.setRef.ref,
	territoire: state.setTerritoire
})

const Liste = connect(
  mapStateToProps,
)(ListeBox)

export default Liste
