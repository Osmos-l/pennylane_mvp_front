import { types } from "mobx-state-tree";
import { RecipesStore } from "./recipesStore";

export const RootStore = types
    .model({
        recipesStore: RecipesStore
    })