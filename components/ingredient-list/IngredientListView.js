import { React, Component } from 'react';
import { FlatList, Text } from 'react-native';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

import { listIngredients } from './../../reducer';

class IngredientListView extends Component {
  componentDidMount() {
    this.props.listIngredients();
  }

  renderItem = ({ item }) => (
    <Text>{item}</Text>
  )

  render() {
    const { ingredients } = this.myIngredients;
    return (
      <FlatList
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

const mapStateToProps = (state) => {
  console.log(state);
  const mappedIngredients = state.ingredients.map(ingredient => ({
    key: ingredient.id, ...ingredient,
  }));

  return {
    ingredients: mappedIngredients,
  };
};

const mapDispatchToProps = {
  listIngredients,
};

export default connect(mapStateToProps, mapDispatchToProps)(IngredientListView);
