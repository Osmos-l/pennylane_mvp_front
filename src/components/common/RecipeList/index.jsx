import React, { useEffect, useState } from "react";
import { useMst } from "@hooks/useMst";
import { observer } from "mobx-react-lite";
import { CardBody } from "react-bootstrap";
import RecipeItem from "./item";

const RecipeList = observer(() => {
    const { recipesStore } = useMst();

    const recipes = recipesStore.recipes;

    return (
        <CardBody>
            {recipes.length === 0 ? (
                <div className="text-center py-4 text-secondary bg-transparent">Aucune recette trouvée.</div>
            ) : (
                recipes.map((recipe) => <RecipeItem key={recipe.id} recipe={recipe} />)
            )}
        </CardBody>
    )
})

export default RecipeList;