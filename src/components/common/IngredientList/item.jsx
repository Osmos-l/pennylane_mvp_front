import React from "react";
import { observer } from "mobx-react-lite";
import { useMst } from "@hooks/useMst";

const IngredientItem = observer(({ ingredient }) => {
    const { ingredientsStore, recipesStore } = useMst();

    const handleToggle = () => {
        ingredientsStore.toggleIngredient(ingredient);

        const ids = ingredientsStore.owned.map((s) => s.id);
        recipesStore.fetchRecipes({ingredients: ids});
    };

  return (
    <div
      onClick={handleToggle}
      className={`mb-3 d-flex align-items-center justify-content-between p-3 border rounded shadow-sm recipe-item cursor-pointer transition-all`}
      style={{
        backgroundColor: ingredient.owned ? "#d4edda" : "#fff",
        borderColor: ingredient.owned ? "#28a745" : "#dee2e6",
        cursor: "pointer",
      }}
    >
      <span
        style={{
          fontWeight: ingredient.owned ? "bold" : "normal",
        }}
      >
        {ingredient.name}
      </span>
    </div>
  );
});

export default IngredientItem;
