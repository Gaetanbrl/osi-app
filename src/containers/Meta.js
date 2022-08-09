import {connect} from 'react-redux'
import MetaBox from '../components/MetaBox'

const mapStateToProps = (state) => ({	
	refIndic: state.refIndic,
	setRef: state.setRef.ref,
	territoire: state.setTerritoire,
	navigationType: state.navigationType
})

const Meta = connect(
  mapStateToProps,
)(MetaBox)

export default Meta