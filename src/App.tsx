import './App.css';

const App = () => {
  return (
    <>
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
          <div className="item active">
            <img src="./images/monster-energy/JUICE-MANGO-LOCO.png" alt="JUICE MANGO LOCO" />

            <div className="content">
              <p>Design</p>
              <h2>JUICE MANGO LOCO</h2>

              <p>Mix de sucos perfeito para atrair as almas mais teimosas. Inspirado pelas tradições mexicanas e com um mix de frutas com manga. Além de sabor também entrega energia!</p>
            </div>
          </div>

          <div className="item">
            <img src="./images/monster-energy/ABSOLUTELY-ZERO.png" alt="ABSOLUTELY ZERO" />

            <div className="content">
              <p>Design</p>
              <h2>ABSOLUTELY-ZERO</h2>

              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam, tempora? Expedita quam quos nisi
                consequatur, fuga explicabo dolore fugiat! Ex nihil mollitia consequatur qui ullam odio dolorum
                quod modi accusantium?</p>
            </div>
          </div>

          <div className="item">
            <img src="./images/monster-energy/DRAGON-ICE-TEA-LIMÃO.png" alt="DRAGON ICE TEA LIMÃO" />

            <div className="content">
              <p>Design</p>
              <h2>DRAGON ICE TEA LIMÃO</h2>

              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam, tempora? Expedita quam quos nisi
                consequatur, fuga explicabo dolore fugiat! Ex nihil mollitia consequatur qui ullam odio dolorum
                quod modi accusantium?</p>
            </div>
          </div>

          <div className="item">
            <img src="./images/monster-energy/DRAGON-ICE-TEA-PÊSSEGO.png" alt="DRAGON ICE TEA PÊSSEGO" />

            <div className="content">
              <p>Design</p>
              <h2>DRAGON ICE TEA PÊSSEGO</h2>

              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam, tempora? Expedita quam quos nisi
                consequatur, fuga explicabo dolore fugiat! Ex nihil mollitia consequatur qui ullam odio dolorum
                quod modi accusantium?</p>
            </div>
          </div>

          <div className="item">
            <img src="./images/monster-energy/JUICE-KHAOS.png" alt="JUICE KHAOS" />

            <div className="content">
              <p>Design</p>
              <h2>JUICE KHAOS</h2>

              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam, tempora? Expedita quam quos nisi
                consequatur, fuga explicabo dolore fugiat! Ex nihil mollitia consequatur qui ullam odio dolorum
                quod modi accusantium?</p>
            </div>
          </div>

          <div className="item">
            <img src="./images/monster-energy/JUICE-KHAOTIC.png" alt="JUICE KHAOTIC" />

            <div className="content">
              <p>Design</p>
              <h2>JUICE KHAOTIC</h2>

              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam, tempora? Expedita quam quos nisi
                consequatur, fuga explicabo dolore fugiat! Ex nihil mollitia consequatur qui ullam odio dolorum
                quod modi accusantium?</p>
            </div>
          </div>

          <div className="item">
            <img src="./images/monster-energy/JUICE-PACIFIC-PUNCH.png" alt="JUICE PACIFIC PUNCH" />

            <div className="content">
              <p>Design</p>
              <h2>JUICE PACIFIC PUNCH</h2>

              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam, tempora? Expedita quam quos nisi
                consequatur, fuga explicabo dolore fugiat! Ex nihil mollitia consequatur qui ullam odio dolorum
                quod modi accusantium?</p>
            </div>
          </div>
        </div>

        <div className="arrows">
          <button id="previous">{'<'}</button>
          <button id="next">{'>'}</button>
        </div>

        <div className="thumbnails">
          <div className="item active">
            <img src="./images/monster-energy/JUICE-MANGO-LOCO.png" alt="JUICE MANGO LOCO" />
            <div className="content">JUICE MANGO LOCO</div>
          </div>

          <div className="item">
            <img src="./images/monster-energy/ABSOLUTELY-ZERO.png" alt="ABSOLUTELY ZERO" />
            <div className="content">ABSOLUTELY ZERO</div>
          </div>

          <div className="item">
            <img src="./images/monster-energy/DRAGON-ICE-TEA-LIMÃO.png" alt="DRAGON ICE TEA LIMÃO" />
            <div className="content">DRAGON ICE TEA LIMÃO</div>
          </div>

          <div className="item">
            <img src="./images/monster-energy/DRAGON-ICE-TEA-PÊSSEGO.png" alt="DRAGON ICE TEA PÊSSEGO" />
            <div className="content">DRAGON ICE TEA PÊSSEGO</div>
          </div>

          <div className="item">
            <img src="./images/monster-energy/JUICE-KHAOS.png" alt="JUICE KHAOS" />
            <div className="content">JUICE KHAOS</div>
          </div>

          <div className="item">
            <img src="./images/monster-energy/JUICE-KHAOTIC.png" alt="JUICE KHAOS" />
            <div className="content">JUICE KHAOTIC</div>
          </div>

          <div className="item">
            <img src="./images/monster-energy/JUICE-PACIFIC-PUNCH.png" alt="JUICE PACIFIC PUNCH" />
            <div className="content">JUICE PACIFIC PUNCH</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
