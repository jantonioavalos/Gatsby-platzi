import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { MenuItem, StyledHeader } from '../styles/components'
import logo from '../images/Logo.png'
import carro from '../images/cart.png'



const Header = ({ siteTitle }) => (
  <StyledHeader>
    <Link to='/'>
      <img src={logo} alt='logotipo' />
    </Link>
    <nav>
      <ul>
        <MenuItem margin><Link to='/'>Productos</Link></MenuItem>
        <MenuItem margin><Link to='http://platzi.com'>Platzi</Link></MenuItem>
        <MenuItem><Link to='/cart'><span><img src={carro} alt='cart icon' /></span></Link></MenuItem>

      </ul>
    </nav>
    <div>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </StyledHeader>)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
