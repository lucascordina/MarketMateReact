import React, { Component } from 'react';
import { View, FlatList, Text } from 'react-native';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

import { listIngredients } from './../../reducer';

import styles from './IngredientListViewStyle';

class IngredientListView extends Component {
  componentDidMount() {
    this.props.listIngredients();
  }

  getCellStyle(rowIndex) {
    if (rowIndex === 0) {
      return styles.ingredientCellFirst;
    } else if (rowIndex === this.props.ingredients.ingredients.length - 1) {
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
      <Text>{JSON.stringify(this.props.ingredients.ingredients.length)}</Text>
    </View>
  )

  render() {
    const { ingredients } = this.props.ingredients;
    return (
      <FlatList
        style={styles.listContainer}
        data={ingredients}
        renderItem={item => this.renderItem(item)}
      />
    );
  }
}

IngredientListView.propTypes = {
  listIngredients: PropTypes.func.isRequired,
  ingredients: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({ ingredients: state.ingredients });

const mapDispatchToProps = {
  listIngredients,
};

export default connect(mapStateToProps, mapDispatchToProps)(IngredientListView);
