import {connect} from 'react-redux'
import MetaBox from '../components/MetaBox'

const mapStateToProps = (state) => ({	
	refIndic: state.refIndic,
	setRef: state.setRef,
	territoire: state.setTerritoire
})

const Meta = connect(
  mapStateToProps,
)(MetaBox)

export default Meta