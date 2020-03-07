import React from "react"
import { Link } from "gatsby"
import headerStyles from "./header.module.scss"

const Header = () => (
  <header>
    <h1>alexandr salikovskiy</h1>
    <nav>
      <ul>
        <li>
          <Link className={headerStyles.link} to="/">
            Home
          </Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contacts">Contacts</Link>
        </li>
      </ul>
    </nav>
  </header>
)

export default Header
