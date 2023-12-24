import Monsters from './services/monster.energy/index.json';
import RedBulls from './services/redbull/index.json';
import './App.css';

interface Drink {
  name: string;
  brand: string;
  description: string;
  category: string;
  image: string;
}

const App = () => {
  const data: Drink[] = [...Monsters, ...RedBulls];

  return (
    <div id='content'>
      <header>
        <div className="logo">YanKaiky</div>

        <ul className="menu">
          <li>Monster Energy</li>
          <li>Red Bull</li>
          <li>Coffee</li>
        </ul>

        <div className="search">
          <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
          </svg>
        </div>
      </header>

      <div className="slider">
        <div className="list">
          {data.map((drk) => {
            return (
              <div className="item active">
                <img src={drk.image} alt={drk.name} />

                <div className="content">
                  <p>Design</p>
                  <h2>{drk.name}</h2>

                  <p>{drk.description}</p>
                </div>
              </div>
            )
          })}
        </div>

        <div className="arrows">
          <button id="previous">{'<'}</button>
          <button id="next">{'>'}</button>
        </div>

        <div className="thumbnails">
          {data.map((drk) => {
            return (
              <div className="item active">
                <img src={drk.image} alt={drk.name} />
                <div className="content">{drk.name}</div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
