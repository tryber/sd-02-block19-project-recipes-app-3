import { BrowserRouter, Switch, Route } from 'react-router-dom';
import React from 'react';
import Home from './Pages/Home';
import Receitas from './Pages/Receitas';
import Explorar from './Pages/Explorar';
import Perfil from './Pages/Perfil';
import DetailsPage from './Pages/DetailsPage';
import ReceitasFeitas from './Pages/ReceitasFeitas';
import ReceitasFavoritas from './Pages/ReceitasFavoritas';
import ExplorarReceita from './Pages/ExplorarReceita';
import ExplorarOrigem from './Pages/ExplorarOrigem';
import ExplorarIngrediente from './Pages/ExplorarIngrediente';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/receitas/:comidabebida/:id" component={DetailsPage} />
        <Route path="/receitas" component={Receitas} />
        <Route path="/receitas-feitas" component={ReceitasFeitas} />
        <Route path="/receitas-favoritas" component={ReceitasFavoritas} />
        <Route exact path="/explorar/comidas/area" component={ExplorarOrigem} />
        <Route path="/explorar/:comidabebida/ingredientes" component={ExplorarIngrediente} />
        <Route path="/explorar/:comidabebida" component={ExplorarReceita} />
        <Route exact path="/explorar" component={Explorar} />
        <Route path="/perfil" component={Perfil} />
        <Route exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
