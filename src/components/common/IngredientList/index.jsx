import React, { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { useMst } from "@hooks/useMst";
import IngredientItemSkeleton from "./itemSkeleton";
import IngredientItem from "./item";
import './index.css'

const IngredientList = observer((query) => {
    const { ingredientsStore } = useMst();

    useEffect(() => {
        ingredientsStore.fetchIngredients();
    }, [])

    const ingredients = ingredientsStore.filterByName(query.query);
    return (
        <div className="ingredient-list">
            {ingredientsStore.loading && ingredients.length === 0 ? (
                Array(10).fill(0).map((_, i) => <IngredientItemSkeleton key={i} />)
            ) : ingredients.length === 0 ? (
                <div className="text-center py-4 text-secondary bg-transparent">
                    No ingredient found.
                </div>
            ) : (
                ingredients.map((ingredient) => <IngredientItem key={ingredient.id} ingredient={ingredient} />)
            )}
        </div>
    )
})

export default IngredientList;