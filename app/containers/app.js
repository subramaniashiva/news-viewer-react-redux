import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Loading from '../components/loading';
import NewsList from '../components/newsList';
import FilterNewsSource from '../components/filterNewsSource';

import { loadNewsList } from '../redux/reducers/newsList';
import { setCurrentSource } from '../redux/reducers/currentSource';
import NEWS_RESOURCES from '../utils/newsResources';

export class App extends Component {
  handleFilterChange(value) {
    this.props.dispatch(setCurrentSource(value))
  }

  getNewsList() {
    return this.props.currentSource === NEWS_RESOURCES.ALL ? this.props.newsList :
      this.props.newsList.filter((news) => news.newsSourceCategory === this.props.currentSource);
  }
  componentDidMount() {
    this.props.dispatch(loadNewsList());
  }
  render () {
    let newsResourcesList = Object.values(NEWS_RESOURCES);
    return (
      <div>
        {!this.props.loading ?
          (
            <div className="container">
              <FilterNewsSource newsSourceList={newsResourcesList} selectedSource={this.props.currentSource}
                handleFilterChange={this.handleFilterChange.bind(this)}></FilterNewsSource>
              <NewsList list={this.getNewsList()}></NewsList>
            </div>
          ) :
          (
            <Loading />
          )
        }
      </div>
    )
  }
}

App.propTypes = {
  loading: PropTypes.bool,
  newsList: PropTypes.array,
  currentSource: PropTypes.string
}

const mapStateToProps = (state) => {
  return {
    loading: state.loading,
    newsList: state.newsList,
    currentSource: state.currentSource
  }
}

export default connect(
  mapStateToProps
)(App);