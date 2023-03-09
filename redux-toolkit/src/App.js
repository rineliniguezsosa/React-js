import { useSelector,useDispatch } from 'react-redux'
import { increment } from './store/slices/counter';
import './App.css'



function App() {
  const { contador } = useSelector(state => state.contador)

  const dispatch = useDispatch()
  
  return (
    <div className="App">
      <header className="App-header">
        <span>la cuenta esta en: {contador}</span>
      </header>
    </div>
  );
}

export default App;
