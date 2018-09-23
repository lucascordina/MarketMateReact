import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

import { deleteList, populateDefaultList } from './../../actions';

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
        <Text>
          Professor Toasty
          </Text>
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
