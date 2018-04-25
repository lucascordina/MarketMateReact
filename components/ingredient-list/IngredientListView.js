import React, { Component } from 'react';
import { View, FlatList, Text } from 'react-native';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

import { getList } from './../../reducer';

import styles from './IngredientListViewStyle';

class IngredientListView extends Component {
  componentDidMount() {
    this.props.getList();
  }

  getCellStyle(rowIndex) {
    if (rowIndex === 0) {
      return styles.ingredientCellFirst;
    } else if (rowIndex === this.props.list.listCategories[0].listIngredients.length - 1) {
      return styles.ingredientCellLast;
    }
    return styles.ingredientCell;
  }

  renderItem = row => (
    <View style={this.getCellStyle(row.index)}>
      <Text style={row.item.isChecked ? styles.ingredientTitleChecked : styles.ingredientTitle}>
        {row.item.title}
      </Text>
      <Text style={styles.ingredientSubtitle}>{row.item.amount}</Text>
    </View>
  )

  render() {
    const { list } = this.props;
    return (
      <FlatList
        style={styles.listContainer}
        data={list.listCategories[0].listIngredients}
        renderItem={item => this.renderItem(item)}
        keyExtractor={(item, index) => `ingredient-list-row-${index}`}
      />
    );
  }
}

IngredientListView.propTypes = {
  getList: PropTypes.func.isRequired,
  list: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({ list: state.list });

const mapDispatchToProps = {
  getList,
};

export default connect(mapStateToProps, mapDispatchToProps)(IngredientListView);
