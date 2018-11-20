import React from "react";
import { Route } from "react-router-dom";

// Pages
import HomePage from "./components/pages/HomePage";
import ProductsPageAnother from "./components/pages/ProductsPageAnother";
import TipsPage from "./components/pages/TipsPage";
import AboutPage from "./components/pages/AboutPage";
import ContactPage from "./components/pages/ContactPage";

// Header
import NavBar from "./components/header/NavBar";
// Footer
import FooterComponent from "./components/footer/FooterComponent";

import ProductsPageContainer from "./components/container/ProductsPageContainer";
import CategoriesPageContainer from "./components/container/CategoriesPageContainer";

const App = () => (
  <div>
    <NavBar />
    <Route path="/" exact component={HomePage} />
    <Route path="/produtos" exact component={ProductsPageAnother} />
    <Route path="/dicas-e-artigos" exact component={TipsPage} />
    <Route path="/nossa-historia" exact component={AboutPage} />
    <Route path="/contato" exact component={ContactPage} />
    <Route path="/todos-produtos/:id" exact component={ProductsPageContainer} />
    <Route path="/todos-categorias" exact component={CategoriesPageContainer} />
    <Route
      path="/todos-categorias/:id"
      exact
      component={CategoriesPageContainer}
    />
    <FooterComponent />
  </div>
);

export default App;
