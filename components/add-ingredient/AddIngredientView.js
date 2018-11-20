import React, { Component } from 'react';
import { View, TextInput, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
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

          <Text style={styles.categoryLabel}>Category: </Text>
          <View style={styles.categoryContainer}>
            <Image style={styles.serratedBorderTop} source={require('../../assets/elements/border-bottom-clipped.png')} />
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              style={styles.categoryScrollView}
            >
              <TouchableOpacity style={styles.categoryButton}>
                <Image source={require('../../assets/icons/dairy.png')} style={styles.categoryButtonIcon} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.categoryButton}>
                <Image source={require('../../assets/icons/meat.png')} style={styles.categoryButtonIcon} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.categoryButton}>
                <Image source={require('../../assets/icons/produce.png')} style={styles.categoryButtonIcon} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.categoryButton}>
                <Image source={require('../../assets/icons/meat.png')} style={styles.categoryButtonIcon} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.categoryButton}>
                <Image source={require('../../assets/icons/produce.png')} style={styles.categoryButtonIcon} />
              </TouchableOpacity>
            </ScrollView>
            <View style={styles.serratedBorderBottomContainer}>
              <Image style={styles.serratedBorderBottom} source={require('../../assets/elements/border-bottom-clipped.png')} />
            </View>
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
