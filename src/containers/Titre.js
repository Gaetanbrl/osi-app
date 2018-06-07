import {connect} from 'react-redux'
import TitreBox from '../components/TitreBox'

const mapStateToProps = (state) => ({	
	refIndic: state.refIndic,
	setRef: state.setRef.ref,
	territoire: state.setTerritoire
})

const Titre = connect(
  mapStateToProps,
)(TitreBox)

export default Titre