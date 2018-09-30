import React, { Component } from 'react';
import { View, TextInput, Text, Image } from 'react-native';
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
          <TextInput style={styles.addIngredientTextbox} placeholder='500 grams' />
          <View style={styles.categoryContainer}>
            <Image style={styles.serratedBorder} source={require('../../assets/elements/border-bottom-clipped.png')} />
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
