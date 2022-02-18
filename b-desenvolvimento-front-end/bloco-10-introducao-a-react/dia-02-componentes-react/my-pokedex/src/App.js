import './App.css';
import Pokedex from './components/Pokedex';
import Header from './components/Header';

function App() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <section className='pok-container'>
        <Pokedex />
      </section>
    </div>
  );
}

export default App;
