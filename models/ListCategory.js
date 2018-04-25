import ListIngredient from './ListIngredient';

export default class ListCategory {
  constructor(name = '', listIngredients = [new ListIngredient()]) {
    this.name = name;
    this.listIngredients = listIngredients;
  }
}
