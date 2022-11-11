import { createStore } from "vuex";

export default createStore({
  state: {
    recipes: [
      {
        slug: "chicken-soup",
        title: "Chicken Soup",
        description: "A delicious chicken soup",
        ingredients: ["1/2 cup rice", "1/2 cup chicken", "1/2 cup water"],
        method: ["Boil water", "Add chicken", "Add rice"],
      },
      {
        slug: "ramen-soup",
        title: "ramen Soup",
        description: "A delicious ramen soup",
        ingredients: ["1/2 cup rice", "1/2 cup ramen", "1/2 cup water"],
        method: ["Boil water", "Add ramen", "Add rice"],
      },
    ],
  },
  getters: {},
  mutations: {
    ADD_RECIPE(state, recipe) {
      state.recipes.push(recipe);
    },
  },
  actions: {},
  modules: {},
});
