import { get } from "./api";

export async function fetchRecipes(params) {
    const res = await get("/recipes", params);
    return res || [];
}

export async function fetchInstructionsForRecipe(id, params) {
    const res = await get(`/recipes/${id}/instructions`, params);
    return res || [];
}   