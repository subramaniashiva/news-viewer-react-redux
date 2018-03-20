import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';

import App from '../../app/containers/app';
import store from '../../app/redux/store';

describe('Main container', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <App />
      </Provider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});