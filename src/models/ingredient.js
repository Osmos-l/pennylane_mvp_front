import { types } from "mobx-state-tree";

export const IngredientModel = types
    .model({
        id: types.identifierNumber,
        name: types.string,
        owned: types.boolean,
    })
    .views(() => ({}))
    .actions((self) => ({}))