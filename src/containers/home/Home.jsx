import React from 'react';
import { connect } from 'react-redux';

import { doLogin } from '../../actions';

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
    const res = doLogin(password);
    console.log(res);
  }

  render () {
    const { password } = this.state;
    const { errorMessage } = this.props;

    return (
      <div>
        <div className="modal-logo"></div>
        <div className="modal-separator"></div>
        <div className="text-intro">
          OSI consiste en une application cartographie en ligne dite «WEB-
          SIG» permettant d’archiver les données spatio-temporelles
          d’indicateurs décrivant les quatre composantes de la
          vulnérabilité systémique à l’érosion et la submersion marines, de
          les exploiter pour calculer des indices décrivant la vulnérabilité
          des territoires, puis de les représenter graphiquement.
          <br/><br/>
          Adressé autant aux chercheurs qu’aux gestionnaires, le pilote de
          cette application en cours de développement doit servir
          d’interface d’analyse multicritère et d’aide à la gestion de la
          vulnérabilité. Sa conception repose sur deux principes directeurs:<br/>
          L’intégrité scientifique des données repose sur le partage d’une
          méthodologie élaborée par une équipe pluridisciplinaire et
          permettant de mettre en œuvre une analyse systémique de la
          vulnérabilité littorale.
          <br/>
          La pertinence de l’outil s’appuie sur l’intégration des équipes
          techniques des collectivités territoriales partenaires, depuis la
          conception des indicateurs jusqu’à la visualisation de la donnée.
          <br/><br/>
          Une cinquantaine d’indicateurs ont été créés afin de suivre la
          vulnérabilité à l’érosion et la submersion marines. Des données
          butes sont collectées selon des protocoles méthodologies pré-
          définis, spécifiques à chaque indicateur.
          <br/>
          Les données sont ensuite mises en forme et rapportées à un carroyage de 200 m de côté, choisi en cohérence avec le
          carroyage de l’INSEE et en projection conforme suivant la
          recommandation de la Directive INSPIRE. Ce choix répond à un
          compromis entre, d’une part, la recherche d’une certaine finesse
          des sorties cartographiques et, d’autre part, la volonté
          d’anonymiser les données.
          <br/><br/>
          Les indicateurs présentent tous une échelle à cinq niveaux. Les
          données sont donc rapportées à une valeur de cette échelle
          selon un protocole défini pour chaque indicateur.
          <br/><br/>
          Enfin les indices résultent de la combinaison de plusieurs
          indicateurs. Ils visent à fournir une information synthétique sur
          un thème, une composante, le risque, ou la vulnérabilité globale.
          <br/><br/>
          A ce jour, les communes pour lesquelles les indicateurs sont les
          mieux renseignés sont Saint Philibert et Locmariaquer, dans le
          Morbihan.
          <br/><br/>
          Cet outil est à un stade expérimental. Il est accessible par mot de
          passe.
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
                <i className="far fa-lock-alt"></i>
                <input type="password" placeholder="Mot de passe" name="password" value={password} onChange={e => this.handleChange(e)} />
              </div>
              {errorMessage && (
                <div className="error">
                  {errorMessage}
                </div>
              )}
              <button className="btn btn-primary" type="submit">Connexion</button>
            </div>
          </div>

        </form>
      </div>
    );
  }
}

export default connect(
  state => ({
    errorMessage: state.doLogin.errorMessage,
  }),
  { doLogin },
)(Home);
