import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const ModifierProduit = () => {
    const { id, nom_produit, description_produit, type_produit, quantite_actuelle, seuil_minimum } = useParams();

    console.log("Params from URL:", { id, nom_produit, description_produit, type_produit, quantite_actuelle, seuil_minimum });

    const [formValues, setFormValues] = useState({
        id: id ? parseInt(id) : null,
        nom_produit: nom_produit || "",
        description_produit: description_produit || "",
        type_produit: type_produit || "",
        quantite_actuelle: quantite_actuelle ? parseInt(quantite_actuelle) : "",
        seuil_minimum: seuil_minimum ? parseInt(seuil_minimum) : ""
    });

    useEffect(() => {
        setFormValues({
            id: id ? parseInt(id) : null,
            nom_produit: nom_produit || "",
            description_produit: description_produit || "",
            type_produit: type_produit || "",
            quantite_actuelle: quantite_actuelle ? parseInt(quantite_actuelle) : "",
            seuil_minimum: seuil_minimum ? parseInt(seuil_minimum) : ""
        });
    }, [id, nom_produit, description_produit, type_produit, quantite_actuelle, seuil_minimum]);

    const handleChange = (e) => {
        const { value, name } = e.target;
        setFormValues((prevValues) => ({
            ...prevValues,
            [name]: name === "quantite_actuelle" || name === "seuil_minimum" ? parseInt(value) : value
        }));
    };

    const handleModify = (e) => {
        e.preventDefault();
        if (!formValues.id) {
            console.error("Invalid product ID");
            return;
        }
        axios.put(`http://127.0.0.1:8000/api/produits/${formValues.id}/`, formValues)
            .then((response) => {
                console.log("Reponse de soummision : ", response);
            })
            .catch((error) => {
                console.error("Il y a eu une erreur lors de la mis a jour", error);
            });
    };

    return (
        <>
            <h1>Modifier Produit</h1>
            <Link to="/">Retour</Link>

            <form onSubmit={handleModify}>
                <div>
                    <label>ID produit:</label>
                    <input 
                        type="text" 
                        name="id" 
                        value={formValues.id || ""}
                        readOnly
                    />
                </div>
                <div>
                    <label>Nom produit:</label>
                    <input 
                        type="text" 
                        name="nom_produit" 
                        value={formValues.nom_produit}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label>Description produit:</label>
                    <input 
                        type="text"
                        placeholder="--"
                        name="description_produit"
                        value={formValues.description_produit}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label>Type Produit</label>
                    <input 
                        type="text"
                        placeholder="--"
                        name="type_produit"
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
                <button type="submit">Modifier produit</button>
            </form>
        </>
    );
};

export default ModifierProduit;