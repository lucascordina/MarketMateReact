import { StyleSheet } from 'react-native';

import brandColors from '../../assets/styling/colors';

export default StyleSheet.create({
  menuContentContainer: {
    flex: 1,
    alignSelf: 'stretch',
    marginTop: 20,
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 35,
    paddingBottom: 35,
  },
  menuItem: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  menuItemText: {
    marginLeft: 15,
    marginTop: 4,
    fontSize: 15
  }
});
