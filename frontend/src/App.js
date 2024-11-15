import React, { useState } from "react";
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import MainPage from "./views/MainPage";
import AjouterProduit from "./views/AjouterProduit";
import ModifierProduit from "./views/ModifierProduit";

function App() {
  return(
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element = {<MainPage/>}/>
          <Route path="/ajouterProduit" element = {<AjouterProduit/>}/>
          <Route path="/modifierProduit/:id/:nom_produit/:description_produit/:type_produit/:quantite_actuelle/:seuil_minimum" element = {<ModifierProduit/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;