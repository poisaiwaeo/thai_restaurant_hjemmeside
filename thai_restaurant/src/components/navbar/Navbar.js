import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.png';
//import css
import './Navbar.css';



const Navbar = () => {
    return (

        <div>
        <nav className="navbar navbar-expand-lg ">
        <NavLink className="navbar-brand" to="/"><img src={logo} alt="Logo" /></NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon "></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav">
      <li className="nav-item active">
          <NavLink className="nav-link" exact to="/"> Forside <span className="sr-only">(current)</span> </NavLink>
      </li>

      <li className="nav-item">
        <NavLink className="nav-link" to="/omos"> Om os </NavLink>
      </li>

      <li className="nav-item">
        <NavLink className="nav-link" to="/bordbestilling"> Bordbestilling </NavLink>
      </li>

      <li className="nav-item ">
      <NavLink className="nav-link" to="/menu"> Menu </NavLink>
        {/* <NavLink className="nav-link dropdown-toggle" to="/menu" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Menu </NavLink> */}
        {/* <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <NavLink className="dropdown-item" to="/menu"> Menu </NavLink>
          <NavLink className="dropdown-item" to="/alleMenu"> Alle menu </NavLink>
          <NavLink className="dropdown-item" to="/forretter"> Forretter </NavLink>
          <NavLink className="dropdown-item" to="/hovedretter"> Hovedretter </NavLink>
          <NavLink className="dropdown-item" to="/dessert"> Dessert </NavLink>
          <NavLink className="dropdown-item" to="/drikkevarer"> Drikkevarer </NavLink>
        </div> */}
      </li>

      <li className="nav-item">
        <NavLink className="nav-link" to="/galleri"> Galleri </NavLink>
      </li>

      <li className="nav-item">
        <NavLink className="nav-link" to="/kontakt"> Kontakt </NavLink>
      </li>

    </ul>
  </div>
</nav>
        </div>

    );
}

export default Navbar;
