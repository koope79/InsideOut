import React from 'react';
import './App.css';
import { Routes, Route, Navigate } from "react-router-dom";
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


function App() {
  return (
    <div className="wrapper">
      <div className="generalContainer">
          <Header />
          <Navbar/>

          <div className="container">
            <Routes>
              <Route path="/" element={<Navigate replace to="/projection" />} />    {/* ===  <Redirect exact from='/' to='/projection'/> */}
              <Route path='/projection' element={<ProjectionContainer />} />
              <Route path='/memories/search' element={<RequireAuth><SearchContainer /></RequireAuth>} />
              <Route path='/memories/sort' element={<SortContainer />} />
              <Route path='/memories/save' element={<RequireAuth><SaveContainer /></RequireAuth>} />
              <Route path='/memories' element={<RequireAuth><MemoriesContainer /></RequireAuth>} />
              <Route path='/transport' element={<RequireAuth><TransportContainer /></RequireAuth>} />
              <Route path='/dreams' element={<DreamsContainer />} />
              <Route path='/fears' element={<FearsContainer />} />
              <Route path='/login' element={<Login/>} />
            </Routes>
          </div>
      </div>
    </div>
  );
}

export default App;

