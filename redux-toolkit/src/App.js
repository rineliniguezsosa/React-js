import { useSelector } from 'react-redux'
import './App.css'



function App() {
  const { contador } = useSelector(state => state.contador)
  return (
    <div className="App">
      <header className="App-header">
        <span>la cuenta esta en: {contador}</span>
      </header>
    </div>
  );
}

export default App;
