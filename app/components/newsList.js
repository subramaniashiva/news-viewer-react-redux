/*
  News Item component - stateless
*/
import React from 'react';
import PropTypes from 'prop-types';

import NewsItem from './newsItem';

// import '../styles/components/_loading.scss';

const NewsList = (props) => (
  <div>
    {
      props && props.list && props.list.map((news, index) => (
        <NewsItem key={index} news={news}></NewsItem>
      ))
    }
  </div>
);

NewsList.propTypes = {
  list: PropTypes.array
}

export default NewsList;
