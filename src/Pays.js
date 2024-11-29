import Accordion from 'react-bootstrap/Accordion';
import {useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Pays() {
  const [filter, setFilter] = useState("");
  const [paysArrayFiltered, setPaysArrayFiltered] = useState([]);
  const [continent, setContinent] = useState("");
  const [sortType, setSortType] = useState("Trier par ordre alphabétique");

  let handleFilter = (event) => {
    console.log(event.target.value.toLowerCase());
    setFilter(event.target.value.toLowerCase());
    
  }

  let handleTri = (event) => {
    setSortType(event.target.innerHTML);
  }





  let createPaysArray = async () => {

      const res = await fetch("http://localhost:3005/pays")
      const donnees = await res.json();
      const paysArray = Object.values(donnees.pays);

      

      const paysFilteredByWords = (paysArray.filter( (value) => value.nom.toLowerCase().includes(filter) ));
      const paysFilteredByContinent = (continent === "" ? paysFilteredByWords : paysFilteredByWords.filter((value) => value.continent === continent));

      if (sortType === "Trier par population") {
        paysFilteredByContinent.sort((p1, p2) => {
          return p2.population - p1.population;
        })
      }

      else paysFilteredByContinent.sort((p1, p2) => {
        return p1.name - p2.name
      });

      setPaysArrayFiltered(paysFilteredByContinent);




  }

  let changeContinent = (event) => {
    setContinent(event.target.innerHTML);
  }

  let noLangues = () => {
    setContinent("");
  }

  useEffect(() => {
    createPaysArray();
  }, [filter, continent, sortType])

  let textBoutonContinent = (continent === "" ? "Choisissez un continent" : continent);


  return (
    <div style={{display:'flex', justifyContent:'center'}}>
      <div className='container m-5' style={{width:'40%'}}>
        <div>
          <input onChange={handleFilter} className='form-control mb-2 me-2' style={{width:"12vw", display:"inline-flex"}}></input>
          <div className='dropdown me-2' style={{width:"12vw", display:"inline-flex"}}>
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{width:"100%"}}>
              {textBoutonContinent}
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
          <div className='dropdown' style={{width:"13vw", display:"inline-flex"}}>
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{width:"100%"}}>
              {sortType}
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <li className="dropdown-item" onClick={handleTri}>Trier par ordre alphabétique</li>
                <li className="dropdown-item" onClick={handleTri}>Trier par population</li>
            </div>
          </div>
        </div>
        <ListePays paysArrayFiltered={paysArrayFiltered}></ListePays>
      </div>
    </div>
        
 
  )
}

export default Pays;

function ListePays(props) {

  const pays = props.paysArrayFiltered.map(items => 
    <Accordion defaultActiveKey="0">
      <Accordion.Item key={items.nom}>
        <Accordion.Header>{items.nom}</Accordion.Header>
        <Accordion.Body>
          <strong>Continent: </strong> {items.nom}
          <br/>
          <strong>Capitale: </strong> {items.capitale}
          <br/>
          <strong>Population: </strong> {items.population.toLocaleString()}
          <br/>
          <strong>Langues officielles: </strong> {items.langues_officielles.join(", ")}
          <br/>
          <strong>Date de création: </strong> {items.date_creation}
          <br/>
          <strong>Drapeau: </strong> <a href={items.drapeau}>{items.drapeau}</a>;
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>


  );


    return (
      <>
        {pays}
      </>
    )

}

