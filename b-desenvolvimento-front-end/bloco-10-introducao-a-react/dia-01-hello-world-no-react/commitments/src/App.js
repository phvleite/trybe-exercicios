import './App.css';


const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const lista = ['reformar quarto', 'fazer projetos', 'encontrar alguém', 'ser feliz'];

function App() {
  return (lista.map((item) => Task(item)));
}

export default App;
