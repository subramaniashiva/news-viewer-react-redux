import React from 'react';
import renderer from 'react-test-renderer';

import NewsList from 'components/newsList';

describe('NewsList component', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
        <NewsList />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
