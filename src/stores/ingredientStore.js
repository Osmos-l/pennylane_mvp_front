import { IngredientModel } from "@models/ingredient";
import { fetchIngredients as fetchIngredientsService } from "@services/ingredients";
import { flow, types } from "mobx-state-tree";

export const IngredientsStore = types
    .model({
        ingredients: types.array(IngredientModel),
        loading: types.boolean
    })
    .views((self) => ({
        get owned() {
            return self.ingredients.filter((ing) => ing.owned) || [];
        }
    }))
    .actions((self) => ({

        filterByName(name) {
            if (!name || name.trim() === "") {
                return self.ingredients;
            }

            return self.ingredients.filter((ing) =>
                ing.name.toLowerCase().includes(name.toLowerCase())
            );
        },

        setIngredients(ingredients) {
            ingredients.forEach((ing) => {
                const exists = self.ingredients.find((i) => i.id === ing.id);
                if (!exists) {
                self.ingredients.push(IngredientModel.create({ owned: false, ...ing }));
                }
            });
        },

        fetchIngredients: flow(function* (params) {
            self.loading = true;
            try {
                const data = yield fetchIngredientsService(params);
                self.setIngredients(data);

            } catch (e) {
                console.error("fetchIngredients KO", e);
            } finally {
                self.loading = false;
            }
        }),

        toggleIngredient(ingredient) {
            if (!ingredient) return;

            ingredient.owned = !ingredient.owned;
        },
    }))