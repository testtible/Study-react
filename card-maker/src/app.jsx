import Login from './components/login/login';
import styles from './app.module.css';
import Home from './components/home/home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App({ authService, FileInput }) {
  return (
    <div className={styles.app}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Login authService={authService}/>
          </Route>
          <Route path="/home">
            <Home authService={authService} FileInput={FileInput}/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
