import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../redux/store/configureStore';
import MissionList from '../components/MissionList';

describe('Mission Component test', () => {
  it('Renders Mission Row', () => {
    const app = renderer
      .create(
        <Provider store={store}>
          <MissionList />
        </Provider>,
      )
      .toJSON();
    expect(app).toMatchSnapshot();
  });
});
