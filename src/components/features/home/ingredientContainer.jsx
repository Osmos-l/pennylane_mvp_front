import React, { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import IngredientList from "@components/common/IngredientList";
import './ingredientContainer.css';
import { useMst } from "@hooks/useMst";
import { debounce } from "lodash";

const IngredientContainer = observer(() => {
    const { ingredientsStore } = useMst();
    const [search, setSearch] = useState("");

    const fetchIngredientsDebounced = debounce((query) => {
        ingredientsStore.fetchIngredients({ q: query });
    }, 300);

    const handleSearchChange = (e) => {
        const value = e.target.value;
        setSearch(value);
        fetchIngredientsDebounced(value);
    };

    return (
        <div className="main_div ingredient-container">
            <div className="ingredient-container-header">
                <input
                    type="text"
                    placeholder="Search ingredient"
                    value={search}
                    onChange={handleSearchChange}
                    className="ingredient-search"
                />
            </div>
            <IngredientList />
        </div>
    )
})

export default IngredientContainer;
