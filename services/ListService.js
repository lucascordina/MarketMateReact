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
}


