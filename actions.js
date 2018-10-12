import { DELETE_LIST , DELETE_INGREDIENT, POPULATE_DEFAULT_LIST, CHECK_INGREDIENT } from './reducer';

export function deleteList() {
    return {
        type: DELETE_LIST
    }
}

export function populateDefaultList() {
    return {
        type: POPULATE_DEFAULT_LIST
    }
}

export function deleteIngredient(ingredientID) {
    return {
        type: DELETE_INGREDIENT,
        value: ingredientID
    }
}

export function checkIngredient(ingredientID) {
    return {
        type: CHECK_INGREDIENT,
        value: ingredientID
    }
}