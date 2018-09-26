import { StyleSheet } from 'react-native';

import brandColors from '../../assets/styling/colors';
import brandFonts from '../../assets/styling/fonts';

export default StyleSheet.create({
  header: {
    alignSelf: 'stretch',
    alignItems: 'stretch',
    backgroundColor: brandColors.primaryColor,
    height: 85,
    justifyContent: 'center',
    padding: 0,
  },
  headerText: {
    alignSelf: 'center',
    color: brandColors.headingTextColor,
    fontSize: 22,
    position: 'relative',
    fontFamily: brandFonts.displayFont,
    top: 17,
  },
  addIngredientIcon: {
    position: 'absolute',
    top: 39,
    right: 32,
  },
  menuIcon: {
    position: 'absolute',
    top: 40,
    left: 31,
  }
});
