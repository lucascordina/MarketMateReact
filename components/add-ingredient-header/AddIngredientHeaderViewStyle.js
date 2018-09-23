import { StyleSheet } from 'react-native';

import brandColors from '../../assets/styling/colors';

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
    marginTop: 30,
    position: 'relative',
    top: 24,
  },
  addIngredientIcon: {
    alignSelf: 'flex-start',
    position: 'relative',
    top: -9,
    left: 18,
  }
});
