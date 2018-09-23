import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import { PropTypes } from 'prop-types';

import { deleteList, populateDefaultList } from '../../actions';

import styles from './MainDrawerContentViewStyle';
import brandColors from '../../assets/styling/colors';

class MainDrawerContentView extends Component {

  componentDidMount() {
  }

  DeleteList() {
    this.props.p_deleteList();
    this.props.navigation.closeDrawer();
  }

  PopulateDefaultList() {
    this.props.p_populateDefaultList();
    this.props.navigation.closeDrawer();
  }

  render() {
    return (
        <View style={styles.menuContentContainer}>
          <TouchableOpacity onPress={() => this.DeleteList()}>
            <View style={styles.menuItem}>
              <Icon name="ios-trash" color={brandColors.primaryTextColor} size={27} />
              <Text style={styles.menuItemText}>Clear List</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.PopulateDefaultList()}>
            <View style={styles.menuItem}>
              <Icon name="ios-refresh" color={brandColors.primaryTextColor} size={27} />
              <Text style={styles.menuItemText}>Repopulate List</Text>
            </View>
          </TouchableOpacity>
        </View>
    );
  }
}

MainDrawerContentView.propTypes = {
};

const mapStateToProps = state => ({ list: state.list, sections: [] });

function mapDispatchToProps(dispatch) {
  return({
    p_populateDefaultList: () => dispatch(populateDefaultList()),
    p_deleteList: () => dispatch(deleteList())
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(MainDrawerContentView);
