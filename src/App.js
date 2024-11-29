import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Pays from './Pays';
import Header from './Header';
import Langues from './Langues';
import Footer from './Footer';


function App() {

    return (
        <BrowserRouter>
        <div className='App'>
            <Header/>
                <div style={{flex:1}}>
                    <Routes>
                        <Route exact path='/' element={<Navigate to="/pays"/>}></Route>
                        <Route path='/pays' element={<Pays/>}></Route>
                        <Route path='/langues' element={<Langues/>}></Route>
                    </Routes>
                </div>   
                <Footer/>
        </div>

        </BrowserRouter>
    )

  
}

export default App;
