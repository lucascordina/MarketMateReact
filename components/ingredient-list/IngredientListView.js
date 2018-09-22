import React, { Component } from 'react';
import { View, SectionList, Text, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

import { deleteList, populateDefaultList } from './../../actions';

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

  componentDidMount() {
  }

  ExpandIngredient(row) {
    row.item.isExpanded = true;
    this.forceUpdate();
  }
  
  CollapseIngredient(row) {
    row.item.isExpanded = false;
    this.forceUpdate();
  }

  renderItem = row => (
    <View style={IngredientListView.getCellStyle(row.index, row.section.data.length)} >
      <View style={styles.ingredientTopRow}>
        <Text style={row.item.isChecked ? styles.ingredientTitleChecked : styles.ingredientTitle}>
          {row.item.title}
        </Text>
        <TouchableOpacity onPress={() => this.ExpandIngredient(row)} style={row.item.isExpanded ? styles.hidden : null}>
          <Image source={require('../../assets/icons/caret-side.png')} style={row.item.hasSubstitutes ? styles.replacementCaret : styles.hidden} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.CollapseIngredient(row)} style={row.item.isExpanded ? null : styles.hidden}>
          <Image source={require('../../assets/icons/caret-down.png')} style={styles.expandedCaret} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.p_deleteList()}>
          <Text>Delete this pls!!!!</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.p_populateDefaultList()}>
          <Text>Recreate List!!!!</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.ingredientSubtitle}>{row.item.amount}</Text>
      <View style={row.item.isExpanded ? styles.replacementRow : styles.hidden}>
        <Text style={styles.replacementText}>{'→ ' + row.item.replacement}</Text>
      </View>
    </View>
  )

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
        <SectionList
          style={styles.listContainer}
          sections={sections}
          showsVerticalScrollIndicator={false}
          renderItem={item => this.renderItem(item)}
          renderSectionHeader={item => (
            <Text style={styles.ingredientCategoryHeader}>{item.section.title}</Text>
          )}
          stickySectionHeadersEnabled={false}
          keyExtractor={(item, index) => `ingredient-list-row-${index}`}
        />
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
    p_populateDefaultList: () => dispatch(populateDefaultList()),
    p_deleteList: () => dispatch(deleteList())
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(IngredientListView);
