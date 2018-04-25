import ListIngredient from './../models/ListIngredient';
import ListCategory from './../models/ListCategory';
import List from './../models/List';

function generateMockIngredients() {
  return [
    new ListIngredient('Chicken', '500 gr', false, false),
    new ListIngredient('Eggs', '6', true, false),
    new ListIngredient('Milk', '300 ml', false, true),
  ];
}

function generateMockListCategories() {
  return [
    new ListCategory('Dairy', generateMockIngredients()),
    new ListCategory('Produce', generateMockIngredients()),
    new ListCategory('Meat', generateMockIngredients()),
  ];
}

export default class ListService {
  static getDefaultList() {
    return new List('My List', generateMockListCategories());
  }
}
