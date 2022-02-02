import React from 'react';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Layout from '../Layout';
import Home from './home';
import StarProfile from './star-profile';
import Stars from './stars';

export default function Pages() {
  return (
      <Router>
        <Layout>
          <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route exact path='/stars' element={<Stars/>}/>
            <Route exact path='/star/profile/:id' element={<StarProfile/>}/>
          </Routes>
        </Layout>
      </Router>
  );
}