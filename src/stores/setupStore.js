import { RootStore } from "./rootStore";

export function setupStore() {
    const store = RootStore.create({
        recipesStore: {
            recipes: [],
            loading: false
        },
        ingredientsStore: {
            ingredients: [],
            loading: false
        }
    });

    return store;
}