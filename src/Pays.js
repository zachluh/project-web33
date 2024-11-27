import logo from './logo.svg';
import './App.css';
import Accordion from 'react-bootstrap/Accordion';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Pays() {

  const [accordionItems, setAccordionItems] = useState("");
  const [filter, setFilter] = useState("");

  let handleFilter = (event) => {
    setFilter(event.target.value);
  }



  let createAccordion = async (filter) => {

    try {
      const res = await fetch("http://localhost:3005/pays")
      const donnees = await res.json();
      const paysArray = Object.values(donnees.pays);

      const paysArrayFiltered = paysArray.filter( (value) => value.nom.includes(this.filter) )


      const pays = paysArrayFiltered.map(items => 
        <Accordion defaultActiveKey="0">
          <Accordion.Item>
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

      setAccordionItems(pays);
    }



    catch (error) {
      console.error(error)
    }
  }

  createAccordion();



  return (
    <div style={{display:'flex', justifyContent:'center'}}>
      <div className='container m-5' style={{width:'40%'}}>
        <input onChange={() => handleFilter()} className='form-control mb-2' ></input>
        {accordionItems}
      </div>
    </div>
        
 
  )
}

export default Pays;

function ListePays(accordion) {

    return (
      <>
        {accordion}
      </>
    )

}

