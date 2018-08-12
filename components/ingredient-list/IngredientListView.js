import React, { Component } from 'react';
import { View, SectionList, Text, Image } from 'react-native';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

import { getList } from './../../reducer';

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
    this.props.getList();
  }

  renderItem = row => (
    <View style={IngredientListView.getCellStyle(row.index, row.section.data.length)}>
      <View style={styles.ingredientTopRow}>
        <Text style={row.item.isChecked ? styles.ingredientTitleChecked : styles.ingredientTitle}>
          {row.item.title}
        </Text>
        <Image source={require('../../assets/icons/carat-side.png')} style={styles.replacementCaret} />
      </View>
      <Text style={styles.ingredientSubtitle}>{row.item.amount}</Text>
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
  getList: PropTypes.func.isRequired,
  list: PropTypes.object.isRequired,
  sections: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({ list: state.list, sections: [] });

const mapDispatchToProps = {
  getList,
};

export default connect(mapStateToProps, mapDispatchToProps)(IngredientListView);
