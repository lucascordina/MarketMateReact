import uuid from 'react-native-uuid';

export default class ListIngredient {
  constructor(title = '', amount = '', amountType = null, isChecked = false, hasSubstitutes = false) {
    this.id = uuid.v1();
    this.title = title;
    this.amount = amount;
    this.amountType = amountType;
    this.isChecked = isChecked;
    this.hasSubstitutes = hasSubstitutes;
    this.replacement = "Soy Milk";
    this.isExpanded = false;
  }

  getAmount() {
    return `${this.amount} ${this.amountType}`;
  }

}
