import React from 'react';
import {shallow} from 'enzyme';
import ShoppingCart from './ShoppingCart';

it('shallow renders', () => {
    const wrapper = shallow(<ShoppingCart />);
    expect(wrapper).toMatchSnapshot();
  });