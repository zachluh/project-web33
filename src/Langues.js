import 'bootstrap/dist/css/bootstrap.min.css';
import {useState } from 'react';

function Langues() {

    const [langues, setLangues] = useState([]);
    const [continentChoisi, setContinentChoisi] = useState("");

    let changeContinent = (event) => {
        console.log(event.target.innerHTML);
        getLangues(event.target.innerHTML);
    }

    let getLangues = async (continent) => {

        const params = new URLSearchParams();
        params.append("continent", continent);
        const url = `http://localhost:3005/langues?${params.toString()}`;
        console.log(url);


        const res = await fetch(url);
        const donnees = await res.json();
        const listelangues = Object.values(donnees);

        for(let i = 0; i<listelangues[0].length; i++) {
            listelangues[0][i] =  ' ' + listelangues[0][i];
        }

        setLangues(listelangues)
        setContinentChoisi(continent);



        
    }

    let noLangues = () => {
        setLangues([]);
        console.log(langues);
    }

    let textBouton = (langues.length === 0 ? "Choisissez un continent" : continentChoisi);
    let displayParagraph  = (langues.length === 0 ? "none" : "block");


    return (
        <div className='m-5' style={{display:'flex', justifyContent:'center'}}>
            <main style={{width:"50%"}}>
                <div className="dropdown" style={{width:"13vw"}}>
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{width:"100%", textAlign:"left"}}>
                        {textBouton}
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <li className="dropdown-item" onClick={noLangues}>Choisissez un continent</li>
                        <li className="dropdown-item" onClick={changeContinent}>Afrique</li>
                        <li className="dropdown-item" onClick={changeContinent}>Amérique du Nord</li>
                        <li className="dropdown-item" onClick={changeContinent}>Amérique du Sud</li>
                        <li className="dropdown-item" onClick={changeContinent}>Asie</li>
                        <li className="dropdown-item" onClick={changeContinent}>Europe</li>
                        <li className="dropdown-item" onClick={changeContinent}>Océanie</li>
                    </div>
                </div>
                <br/>
                <div style={{width:"50%", display: displayParagraph, textAlign:"left"}}>
                    Les langues parlées en {continentChoisi} sont: {langues.join(' ')}
                </div>
            </main>

        </div>

    );
}

export default Langues;