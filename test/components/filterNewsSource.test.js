import React from 'react';
import renderer from 'react-test-renderer';

import FilterNewsSource from 'components/filterNewsSource';

describe('FilterNewsSource component', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
        <FilterNewsSource />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
