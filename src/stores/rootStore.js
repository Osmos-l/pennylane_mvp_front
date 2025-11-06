import { types } from "mobx-state-tree";
import { RecipesStore } from "./recipesStore";
import { IngredientsStore } from "./ingredientStore";

export const RootStore = types
    .model({
        recipesStore: RecipesStore,
        ingredientsStore: IngredientsStore
    })