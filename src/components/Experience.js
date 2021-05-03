
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare, faMinusSquare } from '@fortawesome/free-solid-svg-icons';
import './Experience.css';

class Experience extends Component {

    constructor() {

    super();

    this.state = {
        first: false,
        second: false,
        third: false,
        fourth: false
    };

    }

    toggleFirst() {
        const newState = {...this.state, first: !this.state.first};
        this.setState(newState);
    }

    toggleSecond() {
        const newState = {...this.state, second: !this.state.second};
        this.setState(newState);
    }

    toggleThird() {
        const newState = {...this.state, third: !this.state.third};
        this.setState(newState);
    }

    toggleFourth() {
        const newState = {...this.state, fourth: !this.state.fourth};
        this.setState(newState);
    }

    render() {
        return (
            <ul className="exp-list">
                <li>
                    <p className="exp-title" onClick={ this.toggleFirst.bind(this) }>
                        <span className="exp-ico">{ this.state.first ? <FontAwesomeIcon icon={ faMinusSquare } /> : <FontAwesomeIcon icon={ faPlusSquare } /> }</span>
                        <img className="exp-logo" src="https://media-exp1.licdn.com/dms/image/C4D0BAQHSRoBK10CrMw/company-logo_100_100/0/1561994086966?e=1628121600&v=beta&t=Ukbu4ic4gwfEtC7jrVtDbajkfGJFwbpAMQaI_WinghE" />
                        Nubank (Ago de 2018 - hoje)
                        <br/>
                        Customer Excellence Senior Analyst
                    </p>
                    { this.state.first && (
                        <p>Profissional formada em Relações Internacionais pela PUC-SP com longa experiência com indicadores de sucesso e qualidade de atendimento, na área Customer Experience.</p>
                    )}
                </li>
                <li>
                    <p className="exp-title" onClick={ this.toggleSecond.bind(this) }>
                        <span className="exp-ico">{ this.state.second ? <FontAwesomeIcon icon={ faMinusSquare } /> : <FontAwesomeIcon icon={ faPlusSquare } /> }</span>
                        <img className="exp-logo" src="https://media-exp1.licdn.com/dms/image/C4D0BAQH8iBd7rDU0mg/company-logo_100_100/0/1583356289552?e=1628121600&v=beta&t=Tw0uqg9-kskmzujWzb9wzs0IghvrzEI2w9NNKMUFKWg" />
                        Amaro (Abr de 2017 - Jul de 2017)
                        <br />
                        Estagiária
                    </p>
                    { this.state.second && (
                        <p>Profissional formada em Relações Internacionais pela PUC-SP com longa experiência com indicadores de sucesso e qualidade de atendimento, na área Customer Experience.</p>
                    )}
                </li>
                <li>
                    <p className="exp-title" onClick={ this.toggleThird.bind(this) }>
                        <span className="exp-ico">{ this.state.third ? <FontAwesomeIcon icon={ faMinusSquare } /> : <FontAwesomeIcon icon={ faPlusSquare } /> }</span>
                        <img className="exp-logo" src="https://media-exp1.licdn.com/dms/image/C4D0BAQGCO8olsaHt6Q/company-logo_100_100/0/1585065797231?e=1628121600&v=beta&t=FkDNZhZDV7RHSWKUPQRhGVOq5IV2LpDMF5wQ63DPUqg" />
                        Giorgio Armani (Out de 2015 - Nov de 2016)
                        <br />
                        Estagiária
                    </p>
                    { this.state.third && (
                        <p>Profissional formada em Relações Internacionais pela PUC-SP com longa experiência com indicadores de sucesso e qualidade de atendimento, na área Customer Experience.</p>
                    )}
                </li>
                <li>
                    <p className="exp-title" onClick={ this.toggleFourth.bind(this) }>
                        <span className="exp-ico">{ this.state.fourth ? <FontAwesomeIcon icon={ faMinusSquare } /> : <FontAwesomeIcon icon={ faPlusSquare } /> }</span>
                        <img className="exp-logo" src="https://media-exp1.licdn.com/dms/image/C4E0BAQHd02ITZjxsdQ/company-logo_100_100/0/1614602901804?e=1628121600&v=beta&t=ATtaSBklhQkxl5fFGsq3Y9w5Q_Fpa5ZwBIY3lF3Nxng" />
                        Acoem (Abr de 2014 - Dez de 2014)
                        <br />
                        Estagiária
                    </p>
                    { this.state.fourth && (
                        <p>Profissional formada em Relações Internacionais pela PUC-SP com longa experiência com indicadores de sucesso e qualidade de atendimento, na área Customer Experience.</p>
                    )}
                </li>
            </ul>
        )
    }

}

export default Experience;