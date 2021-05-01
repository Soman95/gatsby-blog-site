import React from "react"
import { Link } from "gatsby"
import logo from "./SILogo.png"

import * as headerStyles from "./header.module.scss"

const Header = () => {

    return (
        <header className={headerStyles.header}>
            <Link to="/">
                <img src={logo} alt="logo" />
            </Link>
            <nav>
                <ul className={headerStyles.navList}>
                    <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/">Home</Link></li>
                    <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/about">About</Link></li>
                    <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/blog">Blog</Link></li>
                    <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/contact">Contact</Link></li>
                </ul>
            </nav>

        </header>
    )
}

export default Header