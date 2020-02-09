import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme'; // eslint-disable-line no-unused-vars
import Home from 'components/public/home';

let wrapper: ShallowWrapper;

beforeEach(() => {
  const component = <Home />;

  wrapper = shallow(component);
});

describe('<Home />', () => {
  it('renders', () => {
    expect(wrapper.exists()).toBe(true);
  });
});
