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
    marginTop: 20,
    position: 'relative',
    top: 24,
  },
  addIngredientIcon: {
    alignSelf: 'flex-start',
    position: 'relative',
    top: -6,
    left: 32,
  }
});
