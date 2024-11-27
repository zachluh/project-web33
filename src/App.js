import logo from './logo.svg';
import './App.css';
import Accordion from 'react-bootstrap/Accordion';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pays from './Pays';
import Header from './Header';


function App() {

    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route exact path='/'></Route>
                <Route path='/pays' element={<Pays/>}></Route>
            </Routes>
        </BrowserRouter>
    )

  
}

export default App;
