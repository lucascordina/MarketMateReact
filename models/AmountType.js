class AmountType {
  constructor(name, shortName) {
    this.name = name;
    this.shortName = shortName;
  }
}

const AMOUNT_TYPE = {
  GRAMS: new AmountType('Grams', 'gr'),
  KILOGRAMS: new AmountType('Kilograms', 'kg'),
  MILLILITERS: new AmountType('Milliliters', 'ml'),
  LITERS: new AmountType('Liters', 'lt'),
};

export default AMOUNT_TYPE;
