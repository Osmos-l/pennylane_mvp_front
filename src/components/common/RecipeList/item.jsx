import React, { useState } from "react";
import { observer } from "mobx-react-lite";
import { FaClock, FaHourglassHalf, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useMst } from "@hooks/useMst";

const RecipeItem = observer(({ recipe }) => {
    const { recipesStore } = useMst();
    const [expanded, setExpanded] = useState(false);

    const toggleExpanded = () => {
        setExpanded(!expanded);

        if (expanded === false && (!recipe.instructions || recipe.instructions.length === 0)) {
            recipesStore.fetchInstructionsForRecipe(recipe);
        }
    };

    return (
        <div className="col-md-6">
        <div 
            className="mb-3 border rounded shadow-sm bg-white recipe-item"
            onClick={toggleExpanded}
            style={{ cursor: "pointer" }}
        >
            <div className="d-flex align-items-start p-3">
            <img
                src={recipe.image_url}
                alt={recipe.title}
                className="rounded me-3"
                loading="lazy"
                style={{ width: "100px", height: "100px", objectFit: "cover" }}
            />

            <div className="flex-grow-1 d-flex flex-column justify-content-between">
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

            <div className="ms-2 d-flex align-items-center">
                {expanded ? <FaChevronUp /> : <FaChevronDown />}
            </div>
            </div>

            {expanded && (
            <div className="p-3 border-top text-muted">
                <h6>Ingredients:</h6>
                <ul>
                    {!recipe.instructions || recipe.instructions.length === 0 ? (
                        <li>No ingredients found.</li>
                    ) : (
                        recipe.instructions.map((instr, index) => (
                        <li key={index} className="mb-1">{instr}</li>
                        ))
                    )}
                </ul>
            </div>
            )}
        </div>
        </div>
    );
});

export default RecipeItem;
