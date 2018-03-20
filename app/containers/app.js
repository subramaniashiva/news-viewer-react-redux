import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Loading from '../components/loading';

export class App extends Component {
  render () {
    return (
      <div>
        {!this.props.loading ? (<div>React app</div>) : (<div><Loading /></div>)}
      </div>
    )
  }
}

App.propTypes = {
  loading: PropTypes.bool
}

const mapStateToProps = (state) => {
  return {
    loading: state.loading
  }
}

export default connect(
  mapStateToProps
)(App);