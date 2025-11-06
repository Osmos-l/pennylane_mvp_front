import { types } from "mobx-state-tree";

export const RecipeModel = types
    .model({
        id: types.identifierNumber,
        title: types.string,
        cook_time: types.integer,
        prep_time: types.integer,
        ratings: types.union(types.float, types.integer),
        image_url: types.string,
        author_id: types.integer,
        instructions: types.maybeNull(types.array(types.string)),
    })
    .views(() => ({}))
    .actions((self) => ({}))