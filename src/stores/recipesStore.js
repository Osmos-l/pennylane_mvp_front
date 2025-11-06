import { RecipeModel } from "@models/recipe";
import { fetchRecipes as fetchRecipesService, fetchInstructionsForRecipe } from "@services/recipes";
import { flow, types } from "mobx-state-tree";

export const RecipesStore = types
    .model({
        recipes: types.array(RecipeModel),
        loading: types.boolean
    })
    .views(() => ({}))
    .actions((self) => ({

        setRecipes(recipes) {
            self.recipes = recipes.map((s) => RecipeModel.create(s));
        },

        fetchRecipes: flow(function* (params) {
            self.loading = true;
            try {
                const data = yield fetchRecipesService(params);
                self.setRecipes(data);

            } catch (e) {
                console.error("fetchRecipes KO", e);
            } finally {
                self.loading = false;
            }
        }),

        fetchInstructionsForRecipe: flow(function* (recipe) {
            if (!recipe) return;

            self.loading = true;
            try {
                const data = yield fetchInstructionsForRecipe(recipe.id, {});
                if (data) {
                    recipe.instructions = data.instructions || [];
                }
            } catch (e) {
                console.error("fetchInstructionsForRecipe KO", e);
            } finally {
                self.loading = false;
            }
        }),
    }))