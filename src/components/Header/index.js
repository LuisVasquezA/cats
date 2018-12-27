// import { Link } from 'gatsby'
import React from 'react'
import PropTypes from 'prop-types'
import './styles.css'

const Header = ({ siteTitle }) => (
  <div>
    <section class="top-nav">
      <input id="menu-toggle" type="checkbox" />
      <label class='menu-button-container' for="menu-toggle">
        <div class='menu-button'></div>
      </label>
      <ul class="menu">
        <li>Shirt</li>
        <li>Bags</li>
        <li className="product-name">JXOS</li>
        <li>Gifts</li>
        <li>Toys</li>
      </ul>
    </section>
  </div>




)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
