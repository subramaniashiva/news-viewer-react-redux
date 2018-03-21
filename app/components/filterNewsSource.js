import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../styles/components/_filterNewsSoruce.scss';

export default class FilterNewsSource extends Component {
  handleChange(event) {
    this.props.handleFilterChange(event.target.value);
  }
  render() {
    let optionItems = this.props.newsSourceList.map((newsSource, index) => 
      <option key={index}>{newsSource}</option>
      )
    return (
      <div>
        <span className="filter-text">Filter News Source: </span>
        <select value={this.props.selectedSource} onChange={this.handleChange.bind(this)}>
          {optionItems}
        </select>
      </div>
    )
  }
}

FilterNewsSource.propTypes = {
  newsSourceList: PropTypes.array,
  selectedSource: PropTypes.string,
  handleFilterChange: PropTypes.function
}
