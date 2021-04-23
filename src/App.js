import { Provider } from 'react-redux';
import './App.css';

// Store.
import Store from './Store';

// Router.
import Router from './Router';

function App() {
  return (
    <Provider store={Store}>
      <div className="App">
        <Router />
      </div>
    </Provider>
  );
}

export default App;
