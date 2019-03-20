import React from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';

import { doLogin } from '../actions';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { password: '' };
  }

  handleChange (event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit (event) {
    event.preventDefault();

    const { password } = this.state;
    const { doLogin } = this.props;
    doLogin(password);
  }

  render () {
    const { password } = this.state;
    const { errorMessage } = this.props;

    return (
      <Modal
        isOpen
        className="modal-wrapper"
        overlayClassName="modal-overlay"
      >
        <div className="modal-logo"></div>
        <div className="modal-separator"></div>
        <div className="text-intro">
          <span className="browser-support">
            Dans l’attente de l’optimisation pour d’autres navigateurs,
            naviguez préférentiellement dans OSI avec Chrome, pour une
            meilleure expérience utilisateur.
            <a href="https://www.google.com/chrome/" target="_blank" rel="noopener noreferrer" className='logo-wrapper'>
              <span className="logo-chrome"></span>
            </a>
          </span>
          OSI consiste en une application de cartographie en ligne dite « WEB-SIG »
          permettant d’archiver les données spatio-temporelles d’indicateurs
          décrivant les quatre composantes de la vulnérabilité systémique à
          l’érosion et la submersion marines, de les exploiter pour calculer
          des indices décrivant la vulnérabilité des territoires, puis de les
          représenter graphiquement.
          <br/><br/>
          Adressé autant aux chercheurs qu’aux gestionnaires, le pilote de cette
          application en cours de développement doit servir d’interface d’analyse
          multicritère et d’aide à la gestion de la vulnérabilité. Sa conception
          repose sur deux principes directeurs :
          <br/><br/>
          <ul>
            <li>
            L’intégrité scientifique des données repose sur le partage d’une
            méthodologie élaborée par une équipe pluridisciplinaire et permettant
            de mettre en œuvre une analyse systémique de la vulnérabilité littorale.
            </li>
            <br/>
            <li>
            La pertinence de l’outil s’appuie sur l’intégration des équipes
            techniques des collectivités territoriales partenaires, depuis la
            conception des indicateurs jusqu’à la visualisation de la donnée.
            </li>
          </ul>
          <br/>
          Une cinquantaine d’indicateurs ont été créés afin de suivre la vulnérabilité à l’érosion et la
          submersion marines. Des données brutes sont collectées selon des protocoles méthodologiques
          prédéfinis, spécifiques à chaque indicateur.
          <br/>
          Les données sont ensuite mises en forme et rapportées à un carroyage de 200 m de côté, choisi en
          cohérence avec le carroyage de l’INSEE et en projection conforme suivant la recommandation de la
          Directive INSPIRE. Ce choix répond à un compromis entre, d’une part, la recherche d’une certaine
          finesse des sorties cartographiques et, d’autre part, la volonté d’anonymiser les données.
          <br/><br/>
          Les indicateurs présentent tous une échelle à cinq niveaux.
          Les données sont donc rapportées à une valeur de cette échelle
          selon un protocole défini pour chaque indicateur.
          <br/><br/>
          Enfin les indices résultent de la combinaison de plusieurs indicateurs.
          Ils visent à fournir une information synthétique sur un thème,
          une composante, le risque, ou la vulnérabilité globale.
          <br/><br/>
          A ce jour, les communes pour lesquelles les indicateurs sont les
          mieux renseignés sont Saint-Philibert et Locmariaquer, dans le Morbihan.
          <br/><br/>
          Cet outil est à un stade expérimental. Il est accessible par mot de passe.
          Vous connaissez le mot de passe ? Connectez-vous ci-dessous.
          <br/><br/>
          Vous souhaitez contacter l'équipe OSI ?<br/>
          Adressez nous votre message à <a href="mailto:contact@risques-cotiers.fr">contact@risques-cotiers.fr</a>
        </div>
        <div className="modal-separator"></div>
        <div className="login-title">Connectez-vous</div>
        <form onSubmit={e => this.handleSubmit(e)}>
          <div className="grid-center">
            <div className="col-2_xs-7_sm-5_md-3_lg-3">
              <div className="field">
                {errorMessage && (
                  <div className="error">
                    <span>{errorMessage}</span>
                  </div>
                )}
                <i className="far fa-lock-alt"></i>
                <input type="password" placeholder="Mot de passe" name="password" value={password} onChange={e => this.handleChange(e)} />
              </div>
              <button className="btn btn-primary" type="submit">Connexion</button>
            </div>
          </div>

        </form>
      </Modal>
    );
  }
}

export default connect(
  state => ({
    errorMessage: state.doLogin.errorMessage,
  }),
  { doLogin },
)(Home);
