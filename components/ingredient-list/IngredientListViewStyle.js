import { StyleSheet } from 'react-native';

import brandColors from '../../assets/styling/colors';

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
    backgroundColor: brandColors.cellColor,
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 26,
    paddingRight: 26,
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
    backgroundColor: brandColors.cellColor,
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 26,
    paddingRight: 26,
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
    backgroundColor: brandColors.cellColor,
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 26,
    paddingRight: 26,
    marginRight: -10,
    marginLeft: -10,
    marginBottom: 15,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    shadowOpacity: 0.19,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 1,
  },
  ingredientTitle: {
    fontSize: 18,
    color: brandColors.primaryTextColor,
    flex: 9,
  },
  ingredientTitleChecked: {
    fontSize: 18,
    textDecorationLine: 'line-through',
    color: brandColors.primaryTextColor,
    flex: 9,
  },
  ingredientSubtitle: {
    fontSize: 12,
    color: brandColors.primaryTextColor,
    fontWeight: '300',
  },
  ingredientCategoryHeader: {
    fontSize: 24,
    color: brandColors.secondaryTextColor,
    fontWeight: '800',
    marginTop: 0,
    marginBottom: 10,
    marginLeft: 16,
  },
  ingredientTopRow: {
    flexDirection: 'row',
  },
  replacementRow: {
    marginTop: 5,
  },
  replacementText: {
    color: brandColors.secondaryTextColor,
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

  emptyListContainer: {
    flex:1,
    alignSelf: 'stretch',
    backgroundColor: brandColors.primaryColor,
  },
  emptyListImage: {
    flex: 0.55 ,
    width: null,
    height: null,
    resizeMode: 'contain',
    marginTop: 90,
  },
  emptyListDescription: {
    fontFamily: 'Pacifico Regular',
    fontSize: 30,
    fontWeight: '400',
    justifyContent: 'center',
    textAlign: 'center',
    marginTop: 40,
    marginLeft: 15,
    marginRight: 15,
    color: '#fff',
  },
});
