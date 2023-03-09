import { useSelector,useDispatch } from 'react-redux'
import { increment } from './store/slices/counter';
import './App.css'



function App() {
  const { counter } = useSelector(state => state.counter)

  const dispatch = useDispatch()

  return (
    <div className="App">
      <header className="App-header">
        <span>la cuenta esta en: {counter}</span>

        <button onClick={()=> dispatch(increment())}>Incrementar</button>
      </header>
    </div>
  );
}

export default App;
