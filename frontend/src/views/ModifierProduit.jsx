import React, { useState } from "react";
import { Link } from "react-router-dom";

const ModifierProduit = () => {
    let [nomProduit, setNomProduit] = useState("");
    let [descriptionProduit, setDescriptionProduit] = useState("")
    let [typeProduit, setTypeProduit] = useState("")
    let [quantiteActuelle, setQuantiteActuelle] = useState()
    let [seuilMinimum, setSeuilMinimum] = useState()

    return(
        <>
        <h1>Modifier Produit</h1>
        <Link to="/">Retour</Link>

        <form action="">
            <div>
                <label>Nom produit:</label>
                <input 
                    type="text" 
                    name="" 
                    id="" />
            </div>
        </form>
        </>
    );
}

export default ModifierProduit;