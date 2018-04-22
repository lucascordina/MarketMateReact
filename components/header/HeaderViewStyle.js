import { StyleSheet } from 'react-native';

import brandColors from '../../assets/styling/colors';

export default StyleSheet.create({
  header: {
    alignSelf: 'stretch',
    alignItems: 'center',
    backgroundColor: brandColors.primaryColor,
    height: 115,
    justifyContent: 'center',
  },
  headerText: {
    alignSelf: 'center',
    color: brandColors.headingTextColor,
    fontSize: 22,
  },
  searchBar: {
    height: 31,
    width: 329,
    backgroundColor: 'white',
    borderRadius: 3,
    marginTop: 15,
    paddingLeft: 10,
    paddingRight: 10,
    borderColor: brandColors.borderColor,
    borderWidth: 1.5,
  },
});
