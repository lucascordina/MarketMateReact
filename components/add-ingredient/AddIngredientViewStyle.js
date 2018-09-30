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
    width: '100%',
    paddingTop: 28,
    marginLeft: 25,
    marginRight: 25,
    height: 60,
  },

  categoryContainer: {
    flex: 1,
    height: 200,
    backgroundColor: brandColors.defaultBackground,
  },
  serratedBorder: {
    width: '105%',
    position: 'relative',
    top: -11,
    left: -5,
  },
});
