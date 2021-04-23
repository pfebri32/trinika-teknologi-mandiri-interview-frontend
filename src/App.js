import { Container } from 'react-bootstrap';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

// Store.
import Store from './Store';

function App() {
  return (
    <Provider store={Store}>
      <BrowserRouter>
        <Switch>
          <Route>
            <div className="App">
              <Container>App</Container>
            </div>
          </Route>
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
