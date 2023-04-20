// 2 - Links com react router
import './Navbar.css';

import { Link } from "react-router-dom"

export const Navbar = () => {
  return (
    <nav>
        <link to="/">Home</link> 
        {/*Faz o direcionamento sem fazer reload da pagina, ou seja somente trocando o componente*/}
        <link to="/about">Sobre</link> 
    </nav>
  )
}

export default Navbar;