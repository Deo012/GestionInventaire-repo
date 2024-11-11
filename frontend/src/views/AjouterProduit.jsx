import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const AjouterProduit = () => {
    const [formValues, setFormValues] = useState({
        nom_produit: "",
        description_produit: "",
        type_produit: "",
        quantite_actuelle: "",
        seuil_minimum: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target; //récupere les valeurs name et value de e.target
        setFormValues({ ...formValues, [name]: value }); //fait un copie de formValues (les trois dots) -- deuxieme parametre change le bon paramentre avant de dupliquer
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        axios.post(`http://127.0.0.1:8000/api/produits/`, formValues)
            .then((response) => {
                console.log("Reponse de soummision : ", response);
            })
            .catch((error) => {
                console.error("Il y a eu une erreur lors de l'ajout du nouveau produit", error);
            }); 

        console.log("Form submitted:", formValues);
    };

    return (
        <>
            <Link to="/">Retour</Link>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Nom produit:</label>
                    <input
                        type="text"
                        name="nom_produit"
                        placeholder="--"
                        value={formValues.nom_produit}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label>Description produit:</label>
                    <input
                        type="text"
                        name="description_produit"
                        placeholder="--"
                        value={formValues.description_produit}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label>Type produit:</label>
                    <input
                        type="text"
                        name="type_produit"
                        placeholder="--"
                        value={formValues.type_produit}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label>Quantité actuelle:</label>
                    <input
                        type="number"
                        name="quantite_actuelle"
                        placeholder="--"
                        value={formValues.quantite_actuelle}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label>Seuil minimum:</label>
                    <input
                        type="number"
                        name="seuil_minimum"
                        placeholder="--"
                        value={formValues.seuil_minimum}
                        onChange={handleChange}
                    />
                </div>

                <button type="submit">Ajouter produit</button>
            </form>
        </>
    );
};

export default AjouterProduit;