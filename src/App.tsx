import './styles/main.scss'

import logoTheSubstance from './assets/images/logo-theSubstance.svg';
import logoAngelsEgg from './assets/images/logo-angelsEgg.png';
import logoPerfectBlue from './assets/images/logo-perfectBlue.png';
import logoReflexoesDeUmLiquidificador from './assets/images/logo-reflexoesDeUmLiquidificador.png';


import backgroundTheSubstance from './assets/images/poster-theSubstance2.png';
import posterAngelsEgg from './assets/images/poster-angelsEgg.jpg';
import posterPerfectBlue from './assets/images/poster-perfectBlue.jpg';
import posterReflexoes from './assets/images/poster-reflexoesDeUmLiquidificador.jpg';


import Header from './components/header.tsx'

function App() {

  return (

  <>
    <div className='wrapper'>
          
            <Header></Header>
            
            <section className="hero">

              <img className="background" src={backgroundTheSubstance}/>
              <img className="logo" src={logoTheSubstance} alt="The Substance" />
            
              <div className="actions">
                <button>Já visto</button>
                <button>Adicionar à lista</button>
              </div>

            </section>

            <section className='display'>
              <h2>EM CARTAZ</h2>

              <div className="cards">

                <a href="file://desktop-o0mhes3/Users/Helena/Videos/Filmes%20Series/Angel's%20Egg/" target="_blank" className='card'>
                  <img src={posterAngelsEgg}/> 
                </a>

                <a href="C:\Users\Helena\Videos\Filmes Series\Perfect.Blue.1997.JAPANESE.REMASTERED.1080p.BluRay.DDP5.1.x265.10bit-GalaxyRG265[TGx]" className='card'>
                  <img src={posterPerfectBlue}/>
                </a>

                <a href="" className='card'>
                  <img src={posterReflexoes}/>
                </a>

              </div>

            </section>

            <section className='rental'>
              <h2>LOCADORA</h2>

              <div className="boxes">

                <a href="" className="box" style={ {backgroundColor: '#fff'}}>
                  <img src={logoTheSubstance}/>
                  <p>2024 2h 21min</p>
                </a>

                <a href="" className="box" style={ {backgroundColor: '#0b0f01'}}>
                  <img src={logoAngelsEgg}/>
                  <p>1985 1h 11min</p>
                </a>

                <a href="" className="box" style={ {backgroundColor: '#1f436d', color: '#fff'}}>
                  <img src={logoPerfectBlue}/>
                  <p>1997 1h 21min</p>
                </a>

                <a href="" className="box" style={ {backgroundColor: '#ff7616'}}>
                  <img src={logoReflexoesDeUmLiquidificador}/>
                  <p>2010 1h 20min</p>
                </a>
              </div>

            </section>
            
      </div>

      <div id="overlay"></div>
    </> 
  
  )
}

export default App
