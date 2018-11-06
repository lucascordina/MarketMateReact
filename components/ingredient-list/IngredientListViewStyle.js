import { StyleSheet } from 'react-native';

import brandColors from '../../assets/styling/colors';
import brandFonts from '../../assets/styling/fonts';

export default StyleSheet.create({
  ingredientListRoot: {
    flex: 1,
    alignSelf: 'stretch',
  },
  listContainer: {
    flex: 1,
    alignSelf: 'stretch',
    margin: 0,
    marginBottom: 35,
    marginTop: 10,
    padding: 5,
  },
  hidden: {
    display: 'none',
  },
  ingredientCell: {
    flex: 1,
    marginRight: -10,
    marginLeft: -10,
    borderBottomWidth: 1,
    borderColor: brandColors.borderColorBold,
    shadowOpacity: 0.19,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 1,
  },
  ingredientCellFirst: {
    flex: 1,
    marginRight: -10,
    marginLeft: -10,
    borderBottomWidth: 1,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderColor: brandColors.borderColorBold,
    shadowOpacity: 0.19,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 1,
  },
  ingredientCellLast: {
    flex: 1,
    marginRight: -10,
    marginLeft: -10,
    marginBottom: 15,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    shadowOpacity: 0.19,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 1,
  },
  swipeoutContainer: {
    flex: 1,
  },
  ingredientInternal: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: brandColors.cellColor,
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 26,
    paddingRight: 26,
  },
  ingredientContentWrapper: {
    flex: 1,
  },
  ingredientCheckbox: {
    marginRight: 8,
    marginTop: 3,
  },
  ingredientCheckboxHidden: {
    display: 'none',
  },
  ingredientTitle: {
    fontSize: 16,
    color: brandColors.primaryTextColor,
    fontFamily: brandFonts.primaryFontBold,
    flex: 9,
  },
  ingredientTitleChecked: {
    fontSize: 16,
    textDecorationLine: 'line-through',
    fontFamily: brandFonts.primaryFontBold,
    color: brandColors.primaryTextColor,
    flex: 9,
  },
  ingredientSubtitle: {
    fontSize: 12,
    fontFamily: brandFonts.primaryFont,
    color: brandColors.primaryTextColor,
    fontWeight: '300',
  },

  ingredientCategoryHeader: {
    flexDirection: 'row',
    overflow: 'hidden',
  },
  ingredientCategoryHeaderText: {
    fontSize: 26,
    color: brandColors.secondaryTextColor,
    fontWeight: '800',
    fontFamily: brandFonts.displayFont,
    marginTop: 0,
    marginBottom: 10,
    marginLeft: 16,
    width: '80%',
  },
  ingredientCategoryHeaderIcon: {
    width: '11%',
    resizeMode: 'contain',
    position: 'absolute',
    top: -38,
    right: 15,
    opacity: 0.9,
  },


  ingredientTopRow: {
    flexDirection: 'row',
  },
  replacementRow: {
    marginTop: 5,
  },
  replacementText: {
    color: brandColors.secondaryTextColor,
    fontFamily: brandFonts.primaryFont,
  },
  replacementCaret: {
    flex: 0.8,
    resizeMode: 'contain',
    right: 0,
    top: 10,
    height: 19,
    position: 'absolute',
  },
  expandedCaret: {
    flex: 0.8,
    resizeMode: 'contain',
    right: 8,
    bottom: -68,
    width: 19,
    position: 'absolute',
  },
  hidden: {
    display: 'none',
  },
});
