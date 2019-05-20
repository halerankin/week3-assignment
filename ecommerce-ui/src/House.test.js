import React from 'react';
import {shallow} from 'enzyme';
import House from './House';

it('shallow renders', () => {
  const wrapper = shallow(<House />);
  expect(wrapper).toMatchSnapshot();
});