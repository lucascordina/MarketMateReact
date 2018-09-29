import ListIngredient from '../models/ListIngredient';
import ListCategory from '../models/ListCategory';
import AmountType from '../models/AmountType';
import List from '../models/List';

function GenerateMockIngredients() {
  return [
    new ListIngredient('Chicken', '500', AmountType.GRAMS, false, false),
    new ListIngredient('Eggs', '6', null, true, false),
    new ListIngredient('Milk', '300', AmountType.MILLILITERS, false, true),
  ];
}

function GenerateMockListCategories() {
  return [
    new ListCategory('Dairy', GenerateMockIngredients()),
    new ListCategory('Produce', GenerateMockIngredients()),
    new ListCategory('Meat', GenerateMockIngredients()),
  ];
}

export default class ListService {
  static GetDefaultList() {
    return new List('My List', GenerateMockListCategories());
  }

  static DeleteIngredientFromList(list, ingredientId) {

    //iterate over each category of the list
    for (let categoryIndex = 0; categoryIndex < list.listCategories.length; categoryIndex++) {
      //iterate over each ingredient of the category
      for (let ingredientIndex = 0; ingredientIndex < list.listCategories[categoryIndex].listIngredients.length; ingredientIndex++) {
        const ingredient = list.listCategories[categoryIndex].listIngredients[ingredientIndex];

        if (ingredient.id === ingredientId) {
          list.listCategories[categoryIndex].listIngredients.splice(ingredientIndex, 1);

          //If no elements are left in the category, then remove the category
          if (list.listCategories[categoryIndex].listIngredients === undefined || list.listCategories[categoryIndex].listIngredients.length === 0) {
            list.listCategories.splice(categoryIndex, 1);
          }

          break;
        }
      }

    }

    let newList = Object.assign({}, list);
    return newList;
  }
}