// import Home from "./pages/Home";

// function App() {
//   return (
//     <div className="App">
//       <h1>Chougar youva !</h1>
//       {/* ON AJOUTE LE COMPOSANT HOME ET L'IMPORT EST AFFICHER EN HAUT AVC LE CHEMIN RELATIF VERS HOME.JS */}
//       <Home />
//     </div>
//   );
// }
// export default App;

//******************************************** */

// rsc + ctrl + espace
// POUR CREER LE COMPOSANT SANS L'ECRIRE
import React from 'react';

// IMPORTER LES COMPOSANTS DE LA NAVIGATION
// CETTE version de router-dom est OBSELETE

// import { BrowserRouter, Switch, Route } from 'react-router-dom';

// REMPALCER PAR
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import About from './pages/About';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <div>
      {/* GERER LA NAVIGATION AVEC LE BLOCK LE PLUS HAUT DE L'APPLICATION  Router */}
      <BrowserRouter>
        {/* ON AJOUTE UN SWITCH (Rooutes) DANS LE CAS IL Y AURA UNE ERREUR ON AFFICHE ERREUR 404 NOT FOUND */}
        <Routes>
          {/* REMPLACER COMPONENT PAR ELEMENT */}
          <Route path="/" component={Home} />
          <Route path="/a-propos" element={<About />} />
          {/* Remplacer la route notFound avec la nouvelle version de react-router-dom*/}
          {/* <Route component={NotFound} /> */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div >
  );
};

export default App;