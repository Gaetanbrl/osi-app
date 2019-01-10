import { connect } from 'react-redux'

import LoginModal from '../components/LoginModal'

import { setDisplayLoginForm, doLogin } from '../actions'

const mapStateToProps = (state) => ({
  displayForm: state.doLogin.displayForm,
})

const mapDispatchToProps = dispatch => {
  return {
    setDisplayLoginForm: () => {
      dispatch(setDisplayLoginForm())
    },
    doLogin: (user, password) => {
      dispatch(doLogin(user, password))
    },
  }
};

const Login = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginModal);

export default Login;
