import { Provider } from 'react-redux';
import store from './Redux/store';

import './App.css';
import Counter from './Components/counter';
import HooksCounter from './Components/hooksCounter';
import NewCounter from './Components/newCounter';
import UserContainer from './Components/userContainer';


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <HooksCounter />
        <Counter />
        <NewCounter/>
        {/* <UserContainer/> */}
      </div>
    </Provider>
  );
}

export default App;
