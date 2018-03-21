import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Loading from '../components/loading';
import NewsList from '../components/newsList';

import { loadNewsList } from '../redux/reducers/newsList';

export class App extends Component {
  componentDidMount() {
    this.props.dispatch(loadNewsList());
  }
  render () {
    return (
      <div>
        {!this.props.loading ?
          (
            <div className="container">
              <NewsList list={this.props.newsList}></NewsList>
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
  newsList: PropTypes.array
}

const mapStateToProps = (state) => {
  return {
    loading: state.loading,
    newsList: state.newsList
  }
}

export default connect(
  mapStateToProps
)(App);