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

  renderItem = ({ item }) => (
    <View style={styles.ingredientCell}>
      <Text style={styles.ingredientTitle}>{item.title}</Text>
      <Text style={styles.ingredientSubtitle}>{item.amount}</Text>
    </View>
  )

  render() {
    const { ingredients } = this.props.ingredients;
    return (
      <FlatList
        style={styles.listContainer}
        data={ingredients}
        renderItem={this.renderItem}
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
