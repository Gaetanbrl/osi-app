import React from 'react';
import Modal from 'react-modal';

class LoginModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = { user: '', password: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange (event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit (event) {
    event.preventDefault();

    const { user, password } = this.state;
    const { doLogin } = this.props;
    doLogin(user, password);
  }

  render () {
    const { user, password } = this.state;
    const { displayForm, setDisplayLoginForm } = this.props;

    return (
      <Modal
        isOpen={displayForm}
        onRequestClose={setDisplayLoginForm}
      >
        <form onSubmit={this.handleSubmit}>
          <label>
            Utilisateur :
            <input type="text" name="user" value={user} onChange={this.handleChange} />
          </label>
          <label>
            Mot de passe :
            <input type="password" name="password" value={password} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Connexion" />
        </form>
      </Modal>
    );
  }
}

export default LoginModal;
