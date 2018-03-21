/*
  News Item component - stateless
*/
import React from 'react';
import PropTypes from 'prop-types';

import '../styles/components/_newsItem.scss';

const NewsItem = (props) => (
  <div className="list-item">
    <p>{props.news.title}</p>
    <p>{props.news.url}</p>
    <p>{props.news.date}</p>
  </div>
);

NewsItem.propTypes = {
  news: PropTypes.object
}

export default NewsItem;
