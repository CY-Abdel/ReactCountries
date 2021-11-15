import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


ReactDOM.render(
  // eviter les bugs et erreurs avex el strict mode
  <React.StrictMode>
    {/* ajouter tout les composants de App.js dans la page index.htlm */}
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);