import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

import { listRepos } from './../../reducer';
import styles from './RepoListStyle';

class RepoListView extends Component {
  componentDidMount() {
    this.props.listRepos('lucascordina');
  }

  renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text>{item.name}</Text>
    </View>
  );

  render() {
    const { repos } = this.props;
    return (
      <FlatList
        styles={styles.container}
        data={repos}
        renderItem={this.renderItem}
      />
    );
  }
}
RepoListView.propTypes = {
  listRepos: PropTypes.func.isRequired,
  repos: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => {
  const storedRepositories = state.repos.map(repo => ({ key: repo.id, ...repo }));
  return {
    repos: storedRepositories,
  };
};

const mapDispatchToProps = {
  listRepos,
};

export default connect(mapStateToProps, mapDispatchToProps)(RepoListView);
