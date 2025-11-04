import { RecipeModel } from "@models/recipe";
import { fetchRecommendationsRecipes } from "@services/recipes";
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

        preloadRecommendations: flow(function* () {
            if (self.recipes.length > 0) return;

            self.loading = true;
            try {
                const data = yield fetchRecommendationsRecipes();
                self.setRecipes(data);

            } catch (e) {
                console.error("preloadRecommendations KO", e);
            } finally {
                self.loading = false;
            }
        })
    }))