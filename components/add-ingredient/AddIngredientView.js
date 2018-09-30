import React, { Component } from 'react';
import { View, TextInput, Text } from 'react-native';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

import { deleteList, populateDefaultList } from '../../actions';

import styles from './AddIngredientViewStyle';

class AddIngredientView extends Component {

  componentDidMount() {
  }

  render() {
    const { list } = this.props;
    const { sections } = this.props;
    list.listCategories.forEach((value) => {
      const section = {
        data: value.listIngredients,
        title: value.name,
      };
      sections.push(section);
    });
    return (
        <View style={styles.addIngredientContainer}>
          <TextInput style={styles.addIngredientTextbox} placeholder='Your Ingredient' />
          <View style={styles.addIngredientAmountContainer}>
            <Text style={styles.addIngredientLabel}>Amount:</Text>
            <TextInput style={styles.quantityInput} placeholder='100' />
            <Text style={styles.separator}>|</Text>
            <TextInput style={styles.quantityTypeInput} placeholder='qty' />
          </View>
        </View>
    );
  }
}

AddIngredientView.propTypes = {
  list: PropTypes.object.isRequired,
  sections: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = state => ({ list: state.list, sections: [] });

function mapDispatchToProps(dispatch) {
  return({
    p_populateDefaultList: () => dispatch(populateDefaultList()),
    p_deleteList: () => dispatch(deleteList())
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(AddIngredientView);
