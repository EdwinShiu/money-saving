import React from 'react';
import './App.css';
import Navbar from './component/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import ExpenseList from './component/list/ExpenseList';
import Summary from './component/summary/Summary';
import EmptySpace from './component/EmptySpace';
import DataContextProvider from './component/TempData';

function App() {
  return (
    <DataContextProvider>
      <Router>
        <div className="App">
          <Navbar />
          <EmptySpace />
          <Switch>
            <Route path="/" exact component={Summary} />
            <Route path="/expense" component={ExpenseList} />
          </Switch>
        </div>
      </Router>
    </DataContextProvider>
  );
}

export default App;