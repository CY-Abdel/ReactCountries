import React, { useState } from 'react';

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

  return (
    <div className="countries">

    </div>
  );
};


export default Countries;