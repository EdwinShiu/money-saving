import React from 'react';
import './App.css';
import Navbar from './component/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Expense from './component/list/Expense';
import Summary from './component/summary/Summary';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Summary} />
          <Route path="/expense" component={Expense} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;