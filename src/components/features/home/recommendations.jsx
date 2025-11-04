import RecipeList from "@components/common/RecipeList";
import { useEffect } from "react";

const Recommendations = () => {
    return (
        <div className="main_div">
            <h2>Recommendations</h2>
            <RecipeList />
        </div>
    );
}

export default Recommendations;