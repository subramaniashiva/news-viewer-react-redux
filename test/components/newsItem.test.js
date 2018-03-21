import React from 'react';
import renderer from 'react-test-renderer';

import NewsItem from 'components/newsItem';

describe('NewsItem component', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
        <NewsItem />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
