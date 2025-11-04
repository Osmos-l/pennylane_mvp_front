import React from "react";
import { observer } from "mobx-react-lite";
import { FaClock, FaHourglassHalf } from "react-icons/fa";

const RecipeItem = observer(({ recipe }) => {
    return (
    <div className="mb-3 d-flex align-items-start border rounded shadow-sm bg-white recipe-item">
        <img
            src={recipe.image_url}
            alt={recipe.title}
            className="rounded me-3"
            loading="lazy"
        />

        <div className="p-3 d-flex flex-column justify-content-between">
            <h5 className="mb-2 fw-bold">{recipe.title}</h5>

            <div className="d-flex gap-3 text-muted">
            <div className="d-flex align-items-center">
                <FaClock className="me-1" /> {recipe.cook_time} min
            </div>
            <div className="d-flex align-items-center">
                <FaHourglassHalf className="me-1" /> {recipe.prep_time} min
            </div>
            </div>
        </div>
    </div>
  );
});

export default RecipeItem;
