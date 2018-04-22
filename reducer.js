export const GET_INGREDIENTS = 'MarketMateReact/ingredients/LOAD';
export const GET_INGREDIENT_SUCCESS = 'MarketMateReact/ingredients/LOAD_SUCCESS';
export const GET_INGREDIENTS_FAIL = 'MarketMateReact/ingredients/LOAD_FAIL';

export default function reducer(state = { repos: [], ingredients: [] }, action) {
  switch (action.type) {
    case GET_INGREDIENTS:
      return { ...state, loading: true };
    case GET_INGREDIENT_SUCCESS:
      return { ...state, loading: false, ingredients: action.payload };
    case GET_INGREDIENTS_FAIL:
      return {
        ...state,
        loading: false,
        error: 'Error while fetching ingredient',
      };
    default:
      return state;
  }
}

export function listIngredients() {
  return {
    type: GET_INGREDIENT_SUCCESS,
    payload: {
      ingredients: [
        'Chicken',
        'eggs',
        'milk',
      ],
    },
  };
}
