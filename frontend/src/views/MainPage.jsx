import React, { useEffect, useState } from "react";
import "./MainPageStyle.css";
import "./reset.css";
import {Link} from "react-router-dom"
import axios, { AxiosHeaders } from "axios";


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

    const deleteProduit = (produitActuel) => {
        axios.delete(`http://127.0.0.1:8000/api/produits/${produitActuel.id}/`, produitActuel)
            .then((response) => {
                console.log("Reponse de soummision : ", response);
            })
            .catch((error) => {
                console.error("Il y a eu une erreur lors de la suppression du produit", error);
            });

    }

    function AfficheProduit() {
        return(
            <div>
                {
                    produitItems.map((produit, index) => (
                        <div key={index} className="dropdown">
    
                            <div className="produit-select">
                                <p>Nom: {produit.nom_produit}</p>
                                <div>
                                    <button className="remove-btn" onClick={() => deleteProduit(produit)}>remove</button>
                                    <Link to={`/modifierProduit/${produit.id}/${produit.nom_produit}/${produit.description_produit}/${produit.type_produit}/${produit.quantite_actuelle}/${produit.seuil_minimum}`}>Modifier</Link>
                                </div>
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

    const handleRefresh = () =>{
        axios
            .get("api/produits/")
            .then((res)=>{setProduits(res.data);})
            .catch((err)=>{console.error("Error fetching products: ", err)})
    }
    useEffect(()=>{
        handleRefresh();
    },[])

    return(
        <>
            <div>
                <h1>Affichage des produits</h1>
                <div>{AfficheProduit()}</div>
                <div className="add-button">  
                    <Link to="/ajouterProduit">Ajouter</Link> 
                    <button onClick={handleRefresh}> Refresh item</button>
                </div> 
            </div>
        </>
    );
}

export default MainPage;