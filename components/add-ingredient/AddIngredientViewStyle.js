import { StyleSheet } from 'react-native';

import brandColors from '../../assets/styling/colors';
import brandFonts from '../../assets/styling/fonts';

export default StyleSheet.create({
  addIngredientContainer: {
    flex: 1,
    alignSelf: 'stretch',
    margin: 0,
    marginBottom: 35,
    paddingTop: 10,
    padding: 5,
    backgroundColor: brandColors.lightBackground,
  },
  addIngredientTextbox: {
    borderBottomColor: brandColors.borderColor,
    borderBottomWidth: 1,
    height: 50,
    paddingLeft: 25,
    paddingRight: 25,
    fontSize: 18,
    fontFamily: brandFonts.primaryFont,
  },
  addIngredientAmountContainer: {
    flexDirection: 'row',
    flex: 1,
    paddingTop: 25,
    marginLeft: 25,
    marginRight: 25,
  },
  addIngredientLabel: {
    fontSize: 16,
    marginRight: 8,
    color: brandColors.secondaryTextColor,
  },
  separator: {
    color: brandColors.secondaryTextColor,
    fontSize: 16,
    marginLeft: 5,
    marginRight: 5,
  },
  quantityInput: {
    fontSize: 16,
    fontFamily: brandFonts.primaryFontBold,
    color: brandColors.primaryTextColor,
    height: 20,
    paddingLeft: 2,
    width: 40,
    textAlign: 'right',
  },
  quantityTypeInput: {
    fontSize: 16,
    fontFamily: brandFonts.primaryFontBold,
    color: brandColors.primaryTextColor,
    height: 20,
    width: 100,
    paddingLeft: 2,
  },
});
