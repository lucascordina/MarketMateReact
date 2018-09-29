import React, { Component } from 'react';
import { View, SectionList, Text, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import Swipeout from 'react-native-swipeout';

import brandColors from '../../assets/styling/colors';
import { deleteIngredient } from '../../actions';
import PlaceHolderRandomizerView from '../placeholder-randomizer/PlaceHolderRandomizerView';

import styles from './IngredientListViewStyle';

class IngredientListView extends Component {

  static getCellStyle(rowIndex, sectionLength) {
    if (rowIndex === 0) {
      return styles.ingredientCellFirst;
    } else if (rowIndex === sectionLength - 1) {
      return styles.ingredientCellLast;
    }
    return styles.ingredientCell;
  }

  ExpandIngredient(row) {
    row.item.isExpanded = true;
    this.forceUpdate();
  }
  
  CollapseIngredient(row) {
    row.item.isExpanded = false;
    this.forceUpdate();
  }

  renderItem = row => 
  {
    swipeoutButtons = [
      {
        text: 'Edit',
        backgroundColor: brandColors.warningColor,
        underlayColor: brandColors.warningColorLighter,
      },
      {
        text: 'Remove',
        backgroundColor: brandColors.errorColor,
        underlayColor: brandColors.errorColorLighter,
        onPress: () => {
          this.props.p_deleteIngredient(row.item.id);
        },
      }
    ];

    return (
    <View style={IngredientListView.getCellStyle(row.index, row.section.data.length)} >
    <Swipeout right={swipeoutButtons} style={styles.swipeoutContainer}>
          <View style={styles.ingredientInternal}>
            <View style={styles.ingredientTopRow}>
              <Text style={row.item.isChecked ? styles.ingredientTitleChecked : styles.ingredientTitle}>
                {row.item.title}
              </Text>
              <TouchableOpacity
                onPress={() => this.ExpandIngredient(row)}
                style={row.item.isExpanded ? styles.hidden : null}
                hitSlop={{top: 30, bottom: 30, left: 50, right: 50}}>
                  <Image source={require('../../assets/icons/caret-side.png')} style={row.item.hasSubstitutes ? styles.replacementCaret : styles.hidden} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.CollapseIngredient(row)}
                style={row.item.isExpanded ? null : styles.hidden}
                hitSlop={{top: 30, bottom: 30, left: 50, right: 50}}>
                  <Image source={require('../../assets/icons/caret-down.png')} style={styles.expandedCaret} />
              </TouchableOpacity>
            </View>
            <Text style={styles.ingredientSubtitle}>{row.item.amount}</Text>
            <View style={row.item.isExpanded ? styles.replacementRow : styles.hidden}>
              <Text style={styles.replacementText}>{'→ ' + row.item.replacement}</Text>
            </View>
          </View>
        </Swipeout>
      </View>
    )
  }
  render() {
    const { list } = this.props;
    const { sections } = this.props;
    list.listCategories.forEach((value) => {
      const section = {
        data: value.listIngredients,
        title: value.name,
        image: null,
      };

      /*TODO:
        - Condiments
        - Cooking
        - Beverages
        - Household
        - Bath
        - Herbs & Spices
      */
      switch (value.name.toLowerCase()) {
        case 'dairy':
          section.image = require('../../assets/icons/dairy.png');
          break;
        case 'meat':
          section.image = require('../../assets/icons/meat.png');
          break;
        case 'produce':
          section.image = require('../../assets/icons/produce.png');
          break;
      }

      sections.push(section);
    });

    return (
      <View style={styles.ingredientListRoot}>
        <SectionList
          style={sections.length > 0 ? styles.listContainer : styles.hidden}
          sections={sections}
          showsVerticalScrollIndicator={false}
          renderItem={item => this.renderItem(item)}
          renderSectionHeader={item => (
            <View style={styles.ingredientCategoryHeader}>
              <Text style={styles.ingredientCategoryHeaderText}>{item.section.title}</Text>
              <Image style={styles.ingredientCategoryHeaderIcon} source={item.section.image} />
            </View>
          )}
          stickySectionHeadersEnabled={false}
          keyExtractor={(item, index) => `ingredient-list-row-${item.id}`
          }
        />
        {
          sections.length <= 0 ? 
            (
            <PlaceHolderRandomizerView />
            )
            : null
        }
      </View>
    );
  }
}

IngredientListView.propTypes = {
  list: PropTypes.object.isRequired,
  sections: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = state => ({ list: state.list, sections: [] });

function mapDispatchToProps(dispatch) {
  return({
    p_deleteIngredient: (ingredientId) => dispatch(deleteIngredient(ingredientId)),
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(IngredientListView);
