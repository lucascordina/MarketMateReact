import { StyleSheet } from 'react-native';

import brandColors from '../../assets/styling/colors';

export default StyleSheet.create({
  header: {
    alignSelf: 'stretch',
    alignItems: 'center',
    backgroundColor: brandColors.primaryColor,
    height: '15%',
    justifyContent: 'center',
  },
  headerText: {
    alignSelf: 'center',
    color: brandColors.headingTextColor,
    fontSize: 22,
  },
});
