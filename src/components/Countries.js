import React, { useState, useEffect } from 'react';

// "npm i -s axios"
import axios from 'axios';
import Card from './Card';

// const Countries = () => {
//   // HOOKS pr stockage
//   const [data, setData] = useState("example de data hooks");

//   const sayGoodbye = () => {
//     setData("Goodbye");
//   };

//   return (
//     <div className="countries">
//       <h1>Countries : {data}</h1>
//       <button onClick={sayGoodbye}>Dire au revoir</button>
//     </div>
//   );
// };


const Countries = () => {
  // HOOKS pr stockage
  const [data, setData] = useState([]);

  // on install on ligne de commande " npm i-s axios" pour ne pas faire de fetch comme js classique

  // mettre axios dans useEffect pour eviter les 10000 requet Network qui ralentisse le process
  useEffect(() => {
    axios
      .get(
        'https://restcountries.com/v3.1/all?fields=name,population,region,capital,flag'
      )
      // .then((res) => console.log(res.data))
      // .then((res) => console.log(res))

      // ON INJECT LE RESULTAT DANS LE SETDATA
      .then((res) => setData(res.data));

    console.log(data); //   rien n'EST AFFICHER A LA CONSOLE MAIS LE HOOKS : STATE DE COMPONENT DANS LA BARRE DE CONSOLE IL Y A TOUT LES PAYS.

  }, []); // AJOUTE [] POUR QUE USEEFFECT SE JOUE UNE SEULE FOIS SEULEMENT SINON ON AURA 10000 REQUETE ET PLUS ENCORE
  // par ex si on met [data] alors le useEffect va etre lu et rejouer chaque fois que la data a été mise a jour.
  // dans notre cas [] sont vide donc la boucles est FINI il sera lu et jouer une seule fois kan

  return (
    // <div>cc</div>
    <div className="countries">
      <ul className="countries-list">
        {data.map((country) => (

          <Card />
        ))}
      </ul>
    </div>
  );
};
export default Countries;