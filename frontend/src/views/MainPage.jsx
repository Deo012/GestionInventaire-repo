import React, { useState } from "react";
import "./MainPageStyle.css";
import "./reset.css";
import {Link} from "react-router-dom"


let produits = [
    {
      id: 4,
      nom_produit: "bouteille d'eau",
      description_produit: "eau chaude",
      type_produit: "liquide",
      quantite_actuelle: 20,
      seuil_minimum: 10,
    },
    {
      id: 5,
      nom_produit: "fromage",
      description_produit: "age 50 ans",
      type_produit: "produit laitier",
      quantite_actuelle: 6,
      seuil_minimum: 2,
    },
    {
      id: 6,
      nom_produit: "banane",
      description_produit: "packet de 8",
      type_produit: "fruit",
      quantite_actuelle: 2,
      seuil_minimum: 1,
    },
];

const MainPage = () => {
    let [produitItems, setProduits] = useState(produits);

    const deleteProduit = (produitName) => {
        const updatedProduitsList = produitItems.filter(item => item.nom_produit !== produitName);
        setProduits(updatedProduitsList);
    }

    function AfficheProduit() {
        return(
            <div>
                {
                    produitItems.map((produit, index) => (
                        <div key={index} className="dropdown">
    
                            <div className="produit-select">
                                <p>Nom: {produit.nom_produit}</p>
                                <button className="remove-btn" onClick={() => deleteProduit(produit.nom_produit)}>remove</button>
                            </div>
    
                            <div className="dropdown-content" >
                                <p>Description: {produit.description_produit}</p>
                                <p>Type: {produit.type_produit}</p>
                                <p>Quantité actuelle: {produit.quantite_actuelle}</p>
                                <p>Seuil minimum: {produit.seuil_minimum}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        );
    }

    return(
        <>
            <div>
                <h1>Affichage des produits</h1>
                <div>{AfficheProduit()}</div>
                <div className="add-button">  <Link to="/ajouterProduit">Ajouter</Link> </div> 
            </div>
        </>
    );
}

export default MainPage;