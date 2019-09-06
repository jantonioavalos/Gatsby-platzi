import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useContext } from "react"
import { MenuItem, StyledHeader } from '../styles/components'
import logo from '../images/Logo.png'
import carro from '../images/cart.png'

import { CartContext } from "../context"

const Header = () => {
  const { cart } = useContext(CartContext);

  return (
    <StyledHeader>
      <Link to='/'>
        <img src={logo} alt='logotipo' />
      </Link>
      <nav>
        <ul>
          <MenuItem margin><Link to='/'>Productos</Link></MenuItem>
          <MenuItem margin><Link to='http://platzi.com'>Platzi</Link></MenuItem>
          <MenuItem><Link to='/cart/'><span><img src={carro} alt='cart icon' />{cart.length}</span></Link></MenuItem>

        </ul>
      </nav>
    </StyledHeader>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
