import React, { useEffect, useState } from "react";
import { useMst } from "@hooks/useMst";
import { observer } from "mobx-react-lite";
import { CardBody } from "react-bootstrap";
import RecipeItem from "./item";
import './index.css';
import RecipeItemSkeleton from "./itemSkeleton";

const RecipeList = observer(() => {
    const { recipesStore } = useMst();

    useEffect(() => {
        recipesStore.fetchRecipes();
    }, [])

    const recipes = recipesStore.recipes;

    return (
        <CardBody className="recipe-list">
            <div className="container">
                <div className="row">
                    {recipesStore.loading && recipes.length === 0 ? (
                        Array(5).fill(0).map((_, i) => <RecipeItemSkeleton key={i} />)
                    ) : recipes.length === 0 ? (
                        <div className="text-center py-4 text-secondary bg-transparent">
                            Aucune recette trouvée.
                        </div>
                    ) : (
                        recipes.map((recipe) => <RecipeItem key={recipe.id} recipe={recipe} />)
                    )}
                </div>
            </div>
        </CardBody>
    )
})

export default RecipeList;