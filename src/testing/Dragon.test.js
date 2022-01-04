import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../redux/store/configureStore';
import Dragons from '../components/Dragons';

describe('Dragon Component test', () => {
  it('Renders Dragon Row', () => {
    const app = renderer
      .create(
        <Provider store={store}>
          <Dragons />
        </Provider>,
      )
      .toJSON();
    expect(app).toMatchSnapshot();
  });
});
