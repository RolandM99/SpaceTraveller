import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../redux/store/configureStore';
import Myprofile from '../components/MyProfile';

describe('MyProfile Component test', () => {
  it('Renders MyProfile', () => {
    const app = renderer.create(
      <Provider store={store}>
        <Myprofile />
      </Provider>,
    ).toJSON();
    expect(app).toMatchSnapshot();
  });
});
