import './App.css';
import { Link } from "react-router";
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {

    return (
        <header className='navbar bg-info' style={{display:'flex'}}>
            <div className='ps-5' style={{display: 'inline-flex', width:'50%'}}>
                <h1 style={{color:'white', fontSize:'1.5vw'}}>Projet Pays par Zachary Tristan Luheshi</h1>
            </div>

            <div className='pe-5' style={{display: 'inline-flex', gap:'1vw', justifyContent:'flex-end'}}>
                <Link to="/pays" style={{textDecoration: "underline", color: "white", fontSize:'1vw'}}> Pays
                </Link>
                <Link to="/langues" style={{textDecoration: "underline", color: "white", fontSize:'1vw'}}> Langues
                </Link>
            </div>

        </header>
    )

  
}

export default Header;
