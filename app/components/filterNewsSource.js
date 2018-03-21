import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../styles/components/_filterNewsSource.scss';

export default class FilterNewsSource extends Component {
  handleChange(event) {
    this.props.handleFilterChange(event.target.value);
  }
  render() {
    let optionItems = this.props.newsSourceList.map((newsSource, index) => 
      <option key={index}>{newsSource}</option>
      )
    return (
      <div className="filter-news-source">
        <span className="filter-text">Filter News Source: </span>
        <div className="select-container">
          <select value={this.props.selectedSource} onChange={this.handleChange.bind(this)}>
            {optionItems}
          </select>
        </div>
      </div>
    )
  }
}

FilterNewsSource.propTypes = {
  newsSourceList: PropTypes.array,
  selectedSource: PropTypes.string,
  handleFilterChange: PropTypes.func
}
