import { get } from "./api";

export async function fetchRecommendationsRecipes() {
    const res = await get("/recipes/recommendations");
    return res || [];
}