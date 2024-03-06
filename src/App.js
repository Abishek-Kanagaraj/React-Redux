import { Provider } from 'react-redux';
import store from './Redux/store';

import './App.css';
import Counter from './Components/counter';
import HooksCounter from './Components/hooksCounter';


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <HooksCounter />
        <Counter />
      </div>
    </Provider>
  );
}

export default App;
