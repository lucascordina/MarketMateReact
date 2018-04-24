export default class ListIngredient {
  constructor(title, amount = '', amountType = null, isChecked = false, hasSubstitutes = false) {
    this.title = title;
    this.amount = amount;
    this.amountType = amountType;
    this.isChecked = isChecked;
    this.hasSubstitutes = hasSubstitutes;
  }

  getAmount() {
    return `${this.amount} ${this.amountType}`;
  }
}
