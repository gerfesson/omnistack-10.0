import React, { useState, useEffect }from 'react';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

function App() {
  const [github_username, setGithubUsername] = useState('');
  const [techs, setTechs] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;

        setLatitude (latitude);
        setLongitude(longitude);
      },
      (err) => {
        console.log(err);
      },
      {
        timeout: 30000,
      }
    )
  }, []);

  async function handleAddDev(e) {
    e.prevent.default();
  }

  return (
    <div className="App">
      <aside>
        <strong>Cadastrar</strong>
        <form onSubmit={handleAddDev}>
          <div className="input-block">
            <label htmlFor="github_username">Usuário do Github</label>
            <input
              name="github_username"
              id="github_username"
              value={github_username}
              onChange={(e) => setGithubUsername(e.target.value)}
              required
            />
          </div>

          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input
              name="techs"
              id="techs"
              value={techs}
              onChange={(e) => setTechs(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input
                type="number"
                name="latitude"
                id="latitude"
                required
                value={latitude}
                onChange={(e) => setLatitude(e.target.value)}
              />
            </div>

            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input
                type="number"
                name="longitude"
                id="longitude"
                required
                value={longitude}
                onChange={(e) => setLongitude(e.target.value)}
              />
            </div>
          </div>
          <button type="submit">Salvar</button>
        </form>
      </aside>
      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars3.githubusercontent.com/u/20760093?s=460&v=4" alt="Gérfesson Santos"/>
              <div className="user-info">
                <strong>Gérfesson Santos</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>Student of Mechatronics Engineering at UFRN. Software developer of Smart Metropolis project at LASID (Distributed Systems Laboratory)</p>
            <a href="https://github.com/gerfesson">Acessar perfil no Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars3.githubusercontent.com/u/20760093?s=460&v=4" alt="Gérfesson Santos"/>
              <div className="user-info">
                <strong>Gérfesson Santos</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>Student of Mechatronics Engineering at UFRN. Software developer of Smart Metropolis project at LASID (Distributed Systems Laboratory)</p>
            <a href="https://github.com/gerfesson">Acessar perfil no Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars3.githubusercontent.com/u/20760093?s=460&v=4" alt="Gérfesson Santos"/>
              <div className="user-info">
                <strong>Gérfesson Santos</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>Student of Mechatronics Engineering at UFRN. Software developer of Smart Metropolis project at LASID (Distributed Systems Laboratory)</p>
            <a href="https://github.com/gerfesson">Acessar perfil no Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars3.githubusercontent.com/u/20760093?s=460&v=4" alt="Gérfesson Santos"/>
              <div className="user-info">
                <strong>Gérfesson Santos</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>Student of Mechatronics Engineering at UFRN. Software developer of Smart Metropolis project at LASID (Distributed Systems Laboratory)</p>
            <a href="https://github.com/gerfesson">Acessar perfil no Github</a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
