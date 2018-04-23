import { StyleSheet } from 'react-native';

import brandColors from '../../assets/styling/colors';

export default StyleSheet.create({
  listContainer: {
    flex: 1,
    alignSelf: 'stretch',
    margin: 10,
    padding: 5,
    shadowColor: brandColors.shadowColor,
    shadowOpacity: 0.19,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  ingredientCell: {
    flex: 1,
    backgroundColor: brandColors.cellColor,
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 16,
    paddingRight: 16,
    textAlign: 'left',
    borderBottomWidth: 1,
    borderColor: brandColors.borderColorBold,
  },
  ingredientTitle: {
    fontSize: 18,
    color: brandColors.primaryTextColor,
  },
  ingredientSubtitle: {
    fontSize: 12,
    color: brandColors.primaryTextColor,
    fontWeight: '300',
  },
});
