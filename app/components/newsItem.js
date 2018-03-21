/*
  News Item component - stateless
*/
import React from 'react';
import PropTypes from 'prop-types';

import '../styles/components/_newsItem.scss';

const NewsItem = (props) => (
  <div className="news-item">
    <a href={props.news.url} target="_blank" className="news-item__title">{props.news.title}</a>
    <p className="news-item__info">
      <span>{props.news.newsSourceCategory} - </span>
      <span>{props.news.date}</span>
    </p>
  </div>
);

NewsItem.propTypes = {
  news: PropTypes.object
}

export default NewsItem;
