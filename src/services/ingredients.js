import { get } from "./api";

export async function fetchIngredients(params) {
    const res = await get("/ingredients", params);
    return res || [];
}