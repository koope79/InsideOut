import React from 'react';
import './App.css';
import { Switch, Route, Redirect } from "react-router-dom";
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import ProjectionContainer from './components/ProjectionMemory/ProjectionContainer';
import MemoriesContainer from './components/Memories/MemoriesContainer';
import FearsContainer from './components/Fears/FearsContainer';
import TransportContainer from './components/Transport/TransportContainer';
import DreamsContainer from './components/Dreams/DreamsContainer';
import SearchContainer from './components/Memories/Search/SearchContainer';

function App() {
  return (
    <div className="wrapper">
      <div className="generalContainer">
          <Header />
          <Navbar />

          <div className="container">
            <Switch>
              <Redirect exact from='/' to='/projection'/>
              <Route path='/projection' render={() => <ProjectionContainer />} />
              <Route path='/memories/search' render={()=> <SearchContainer />} />
              <Route path='/memories/sort' render={()=> <div>sort</div>} />
              <Route path='/memories/save' render={()=> <div>save</div>} />
              <Route path='/memories' render={() => <MemoriesContainer />} />
              <Route path='/transport' render={() => <TransportContainer />} />
              <Route path='/dreams' render={() => <DreamsContainer />} />
              <Route path='/fears' render={() => <FearsContainer />} />
              
            </Switch>
          </div>
          
      </div>
    </div>
  );
}

export default App;
