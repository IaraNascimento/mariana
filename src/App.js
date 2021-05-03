
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faEnvelope, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Formation from './components/Formation';
import Qualification from './components/Qualification';
import Expertise from './components/Expertise';
import Experience from './components/Experience';
import profile from './assets/profile.jfif';
import './App.css';

class App extends Component {

  constructor() {

    super();

    this.state = {
      isOpenedFormation: false,
      isOpenedQualification: false,
      isOpenedExpertise: false,
      isOpenedExperience: false
    };

  }

  toggleFormation() {
    const newState = {...this.state, isOpenedFormation: !this.state.isOpenedFormation};
    this.setState(newState);
  }

  toggleQualification() {
    const newState = {...this.state, isOpenedQualification: !this.state.isOpenedQualification};
    this.setState(newState);
  }

  toggleExpertise() {
    const newState = {...this.state, isOpenedExpertise: !this.state.isOpenedExpertise};
    this.setState(newState);
  }

  toggleExperience() {
    const newState = {...this.state, isOpenedExperience: !this.state.isOpenedExperience};
    this.setState(newState);
  }

  render() {
    return (
      <main className="app">
        <div className="app-title-wrap">
          <h1 className="app-title">
            Maria Mariana
            <p className="app-subtitle">Operadora de Negócios</p>
          </h1>
        </div>
        <div className="app-content">
          <section className="app-profile">
            <h2>Perfil</h2>
            <p>Profissional formada em Relações Internacionais pela PUC-SP com longa experiência com indicadores de sucesso e qualidade de atendimento, na área Customer Experience.</p>
          </section>
          <section>
            <img className="app-picture" src={profile} />
          </section>
          <section>
            <ul className="app-info">
              <li><FontAwesomeIcon className="app-info-ico app-info-home" icon={ faHome } /> Avenida Paulista, 648</li>
              <li><FontAwesomeIcon className="app-info-ico app-info-envelope" icon={ faEnvelope } /> mmbarbosamendes@outlook.com.br</li>
              <li><FontAwesomeIcon className="app-info-ico app-info-whatsapp" icon={ faWhatsapp } /> <a target="_blank" href="//api.whatsapp.com/send?phone=+5511982698314&text=Oi Mariana" title="whatsapp">+55 11 98269-8314</a></li>
              <li><FontAwesomeIcon className="app-info-ico app-info-linkedin" icon={ faLinkedin } /> <a target="_blank" href="https://www.linkedin.com/in/maria-mariana-barbosa-mendes-360a56104/" title="linkedin">Linkedin Mariana Barbosa Mendes</a></li>
            </ul>
          </section>
        </div>
        <div className="app-content">
          <section>
            <h2 className="app-subtitle-toggle" onClick={ this.toggleFormation.bind(this) }>
              Formação { this.state.isOpenedFormation ? <FontAwesomeIcon icon={ faChevronUp } /> : <FontAwesomeIcon icon={ faChevronDown } /> }
            </h2>
            { this.state.isOpenedFormation && ( <Formation /> )}
          </section>
          <section>
            <h2 className="app-subtitle-toggle" onClick={ this.toggleQualification.bind(this) }>
              Qualificações { this.state.isOpenedQualification ? <FontAwesomeIcon icon={ faChevronUp } /> : <FontAwesomeIcon icon={ faChevronDown } /> }
            </h2>
            { this.state.isOpenedQualification && ( <Qualification /> )}
          </section>
          <section>
            <h2 className="app-subtitle-toggle" onClick={ this.toggleExpertise.bind(this) }>
              Expertise { this.state.isOpenedExpertise ? <FontAwesomeIcon icon={ faChevronUp } /> : <FontAwesomeIcon icon={ faChevronDown } /> }
            </h2>
            { this.state.isOpenedExpertise && ( <Expertise /> )}
          </section>
        </div>
        <div className="app-content">
          <article className="">
          <h2 className="app-subtitle-toggle" onClick={ this.toggleExperience.bind(this) }>
            Experiência { this.state.isOpenedExperience ? <FontAwesomeIcon icon={ faChevronUp } /> : <FontAwesomeIcon icon={ faChevronDown } /> }
          </h2>
            { this.state.isOpenedExperience && ( <Experience />)}
          </article>
        </div>
      </main>
    );
  }
}

export default App;
