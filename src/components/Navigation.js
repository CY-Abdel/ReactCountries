import React from 'react';

// LE COMPONENT QUI PERMET D'ALLER DE PAGE EN PAGE
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <div className="navigation">
      <NavLink exact to="/" activeClassName="nav-active">
        Acceuil
      </NavLink>
      <NavLink exact to="/a-propos" activeClassName="nav-active">
        À propos
      </NavLink>
    </div>
  );
};

export default Navigation;