import React from "react";
import {
  Navbar,
  NavItem,
  SideNav,
  SideNavItem,
  Button,
  Icon
} from "react-materialize";
import { Link } from "react-router-dom";

import "../../css/NavBar.css";
import logo from "../../img/Logo/goomec_logo.jpg";

const NavBar = () => (
  <div>
    <Navbar className="navbar-color" brand={logo} fixed right>
      <NavItem node="a" href="/">
        Home
      </NavItem>
      <NavItem node="a" href="/nossa-historia">
        Nossa História
      </NavItem>
      <NavItem node="a" href="/produtos">
        Produtos
      </NavItem>
      {/* <NavItem node="a" href="/dicas-e-artigos">
        Dicas
      </NavItem> */}
      <NavItem node="a" href="/contato">
        Contato
      </NavItem>
    </Navbar>
    <SideNav
      trigger={
        <div className="navbar-button">
          <Button floating style={{ position: "fixed" }} icon="menu" />
        </div>
      }
      options={{ closeOnClick: true }}
    >
      <Link to="/">
        <div className="nav-item-menu">
          <Icon>home</Icon>
          <span className="nav-item-text">Home</span>
        </div>
      </Link>
      <Link to="/nossa-historia">
        <div className="nav-item-menu">
          <Icon>more</Icon>
          <span className="nav-item-text">Sobre nós</span>
        </div>
      </Link>
      <Link to="/produtos">
        <div className="nav-item-menu">
          <Icon>work</Icon>
          <span className="nav-item-text">Produtos</span>
        </div>
      </Link>
      {/* <Link to="/dicas-e-artigos">
        <div className="nav-item-menu">
          <Icon>build</Icon>
          <span className="nav-item-text">Dicas e Artigos</span>
        </div>
      </Link> */}
      <Link to="/contato">
        <div className="nav-item-menu">
          <Icon>contacts</Icon>
          <span className="nav-item-text">Contato</span>
        </div>
      </Link>
      <SideNavItem divider />
      <SideNavItem subheader>GooMec</SideNavItem>
    </SideNav>
  </div>
);

export default NavBar;
