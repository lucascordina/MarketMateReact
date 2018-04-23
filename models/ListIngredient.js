export default class ListIngredient {
  constructor(title, amount = '', isChecked = false, hasSubstitutes = false) {
    this.title = title;
    this.amount = amount;
    this.isChecked = isChecked;
    this.hasSubstitutes = hasSubstitutes;
  }
}
