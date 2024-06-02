import React from 'react';
import { BrowserRouter, Switch, Route, Link} from 'react-router-dom'
import{ Home} from './pages/Home';
import {About} from './pages/About';
import {Articles} from './pages/Articles';


 const App = () => {
  return (
    <BrowserRouter>
      <h1>Server-Side Rendering</h1>
      <Switch>
        <Route path='/' exact>
          <Home></Home>
        </Route>
        <Route path='/about'>
          <About></About>
        </Route>
        <Route path='/articles'> 
          <Articles></Articles>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
