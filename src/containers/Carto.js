import {connect} from 'react-redux'
import Carlitto from '../components/Carlitto'

const mapStateToProps = state => ({	
	territoire: state.setTerritoire,
	infos: state.infoReducer.infos,
	loading: state.infoReducer.loading,
	error: state.infoReducer.error
})

// const mapDispatchToProps = dispatch => {
// 	return {
// 		}
// 	}
// }

const Carto = connect(
  mapStateToProps,
  // mapDispatchToProps
)(Carlitto)

export default Carto