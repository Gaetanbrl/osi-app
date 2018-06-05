import {connect} from 'react-redux'
import Carlitto from '../components/Carlitto'

const mapStateToProps = state => ({	
	territoire: state.setTerritoire.comm,
	setRef: state.setRef.ref,
	infos: state.infoReducer.infos,
	loading: state.infoReducer.loading,
	error: state.infoReducer.error
})

const Carto = connect(
  mapStateToProps,
)(Carlitto)

export default Carto