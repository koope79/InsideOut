import React from 'react';
import './App.css';
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import ProjectionContainer from './components/ProjectionMemory/ProjectionContainer';
import MemoriesContainer from './components/Memories/MemoriesContainer';
import FearsContainer from './components/Fears/FearsContainer';
import TransportContainer from './components/Transport/TransportContainer';
import DreamsContainer from './components/Dreams/DreamsContainer';
import SearchContainer from './components/Memories/Search/SearchContainer';
import SaveContainer from './components/Memories/Save/SaveContainer';
import Login from './components/Login/Login';
import RequireAuth from './components/hoc/withRequireAuth';
import SortContainer from './components/Memories/Sort/SortContainer';
import IslandsContainer from './components/Islands/IslandsContainer';
import ReactionContainer from './components/Reaction/ReactionContainer';
import { Provider } from 'react-redux';
import store from './redux/redux-store';


function App() {
  return (
    <div className="wrapper">
      <div className="generalContainer">
          <Header />
          <Navbar/>

          <div className="container">
            <Routes>
              <Route path="/" element={<Navigate replace to="/login" />} />
              <Route path='/projection' element={<ProjectionContainer />} />
              <Route path='/memories/search' element={<RequireAuth><SearchContainer /></RequireAuth>} />
              <Route path='/memories/sort' element={<SortContainer />} />
              <Route path='/memories/save' element={<RequireAuth><SaveContainer /></RequireAuth>} />
              <Route path='/memories' element={<RequireAuth><MemoriesContainer /></RequireAuth>} />
              <Route path='/transport' element={<RequireAuth><TransportContainer /></RequireAuth>} />
              <Route path='/dreams' element={<DreamsContainer />} />
              <Route path='/fears' element={<FearsContainer />} />
              <Route path='/islands' element={<RequireAuth><IslandsContainer /></RequireAuth>} />
              <Route path='/reaction' element={<ReactionContainer />} />
              <Route path='/login' element={<Login/>} />
            </Routes>
          </div>
      </div>
    </div>
  );
}

const AppContainer = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  );
}
export default AppContainer;

