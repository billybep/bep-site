import './App.css';
import { Switch, Route } from 'react-router-dom'
import Home from '../src/pages/Home'
import About from '../src/pages/About'
import Portfolio from '../src/pages/Portfolio'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/'           component={Home} exact/>
        <Route path='/about'      component={About} />
        <Route path='/portfolio'  component={Portfolio} />
      </Switch>
    </div>
  );
}

export default App;
