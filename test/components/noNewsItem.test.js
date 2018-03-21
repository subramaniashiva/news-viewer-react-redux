import React from 'react';
import renderer from 'react-test-renderer';

import NoNewsItem from 'components/noNewsItem';

describe('NoNewsItem component', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
        <NoNewsItem />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
