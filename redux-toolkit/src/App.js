import { useSelector,useDispatch } from 'react-redux'
import { increment,decrement,decrementby } from './store/slices/counter';
import './App.css'



function App() {
  const { counter } = useSelector(state => state.counter)

  const dispatch = useDispatch()

  return (
    <div className="App">
      <header className="App-header">
        <span>la cuenta esta en: {counter}</span>

        <button onClick={()=> dispatch(increment())}>Incrementar</button>
        <br></br>
        <button onClick={()=> dispatch(decrement())}>decrementar</button>
        <br></br>
        <button onClick={()=> dispatch(decrementby(2))}>increment by</button>
      </header>
    </div>
  );
}

export default App;
