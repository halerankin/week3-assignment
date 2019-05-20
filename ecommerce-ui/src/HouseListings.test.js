import React from 'react';
import {shallow} from 'enzyme';
import HouseListings from './HouseListings';

it('shallow renders', () => {
  const wrapper = shallow(<HouseListings />);
  expect(wrapper).toMatchSnapshot();
});