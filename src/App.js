import { BrowserRouter, Switch, Route } from 'react-router-dom';
import React from 'react';
import Home from './Pages/Home';
import Receitas from './Components/Receitas';
import Explorar from './Components/Explorar';
import Perfil from './Pages/Perfil';
import DetailsPage from './Pages/DetailsPage';
import ReceitasFeitas from './Components/ReceitasFeitas';
import ReceitasFavoritas from './Components/ReceitasFavoritas';


import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/receitas/:comidabebida/:id" component={DetailsPage} />
        <Route path="/receitas" component={Receitas} />
        <Route path="/receitas-feitas" component={ReceitasFeitas} />
        <Route path="/receitas-favoritas" component={ReceitasFavoritas} />
        <Route exact path="/explorar" component={Explorar} />
        {/* <Route path="/explorar" component={ExplorarReceita} /> */}
        <Route path="/perfil" component={Perfil} />
        <Route exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
