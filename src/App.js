import logo from './logo.svg';
import './App.css';
import Accordion from 'react-bootstrap/Accordion';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [accordionItems, setAccordionItems] = useState("");



  let createAccordion = async () => {

    try {
      const res = await fetch("http://localhost:3005/pays")
      const donnees = await res.json();
      const paysArray = Object.values(donnees.pays);


      const pays = paysArray.map(items => 
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
    <body>
      {accordionItems}
    </body>
        
 
  )
}

export default App;
