declare const describe: any;
declare const it: any;

import { expect } from 'chai';
import * as React from 'react';
import { shallow } from 'enzyme';

import Hello from '../src/components/Hello';

describe('<Hello/>', () => {
  it('should render an h1', () => {
    const wrapper = shallow(<Hello compiler="test compiler" framework="test framework" />);
    console.log(wrapper.debug());
    expect(wrapper.contains(
      <h1>
        Hello from test compiler and test framework!
      </h1>
    )).to.be.true;
  });
});
