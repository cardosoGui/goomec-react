import React from "react";
import { Route } from "react-router-dom";

// Pages
import HomePage from "./components/pages/HomePage";
import ProductsPage from "./components/pages/ProductsPage";
import TipsPage from "./components/pages/TipsPage";
import AboutPage from "./components/pages/AboutPage";
import ContactPage from "./components/pages/ContactPage";
import AllProductsContainer from "./components/container/AllProductsContainer";

// Header
import NavBar from "./components/header/NavBar";
// Footer
import FooterComponent from "./components/footer/FooterComponent";

import AllCategoryItem from "./components/container/AllCategoryItem";

const App = () => (
  <div>
    <NavBar />
    <Route path="/" exact component={HomePage} />
    <Route path="/todos-produtos" exact component={AllProductsContainer} />
    <Route path="/todos-categorias" exact component={AllCategoryItem} />

    <Route path="/produtos" exact component={ProductsPage} />
    <Route path="/dicas-e-artigos" exact component={TipsPage} />
    <Route path="/nossa-historia" exact component={AboutPage} />
    <Route path="/contato" exact component={ContactPage} />
    <FooterComponent />
  </div>
);

export default App;
