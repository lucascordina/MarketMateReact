import React, { Component } from 'react';
import { View, SectionList, Text } from 'react-native';
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
