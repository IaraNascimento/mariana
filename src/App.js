import './App.css';
import profile from './assets/profile.jfif';

function App() {
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
            <li>Avenida Paulista, 648</li>
            <li>mmbarbosamendes@outlook.com.br</li>
            <li>+55 11 98269-8314</li>
            <li><a target="_blank" href="https://www.linkedin.com/in/maria-mariana-barbosa-mendes-360a56104/">linkedin</a></li>
          </ul>
        </section>
      </div>
      <div className="app-content">
        <section>
          <h2>Formação</h2>
          <ul className="app-habilities">
            <li>
              <h3>Pós Graduação em Gerenciamento de Negócios</h3>
              <p>Centro Universitário FMU</p>
            </li>
            <li>
              <h3>Bacharelado em Relações Internacionais</h3>
              <p>Pontifícia Universidade Católica de São Paulo</p>
            </li>
            <li>
              <h3>Língua e Cultura Francesas</h3>
              <p>Institut catholique de Paris</p>
            </li>
          </ul>
        </section>
        <section>
          <h2>Qualificações</h2>
          <ul className="">
            <li>
              <p>Excel</p>
            </li>
            <li>
              <p>Excel</p>
            </li>
            <li>
              <p>Excel</p>
            </li>
            <li>
              <p>Excel</p>
            </li>
            <li>
              <p>Excel</p>
            </li>
            <li>
              <p>Excel</p>
            </li>
            <li>
              <p>Excel</p>
            </li>
            <li>
              <p>Excel</p>
            </li>
            <li>
              <p>Excel</p>
            </li>
            <li>
              <p>Excel</p>
            </li>
          </ul>
        </section>
        <section>
          <h2>Expertise</h2>
          <ul className="">
          <li>
              <p>Excel</p>
            </li>
            <li>
              <p>Excel</p>
            </li>
            <li>
              <p>Excel</p>
            </li>
            <li>
              <p>Excel</p>
            </li>
            <li>
              <p>Excel</p>
            </li>
            <li>
              <p>Excel</p>
            </li>
            <li>
              <p>Excel</p>
            </li>
            <li>
              <p>Excel</p>
            </li>
            <li>
              <p>Excel</p>
            </li>
            <li>
              <p>Excel</p>
            </li>
          </ul>
        </section>
      </div>
      <div className="app-content">
        <article className="">
          <h2>Perfil</h2>
            <ul className="">
              <li>
                <p>Profissional formada em Relações Internacionais pela PUC-SP com longa experiência com indicadores de sucesso e qualidade de atendimento, na área Customer Experience.</p>
              </li>
              <li>
                <p>Profissional formada em Relações Internacionais pela PUC-SP com longa experiência com indicadores de sucesso e qualidade de atendimento, na área Customer Experience.</p>
              </li>
              <li>
                <p>Profissional formada em Relações Internacionais pela PUC-SP com longa experiência com indicadores de sucesso e qualidade de atendimento, na área Customer Experience.</p>
              </li>
              <li>
                <p>Profissional formada em Relações Internacionais pela PUC-SP com longa experiência com indicadores de sucesso e qualidade de atendimento, na área Customer Experience.</p>
              </li>
            </ul>
        </article>
      </div>
    </main>
  );
}

export default App;
