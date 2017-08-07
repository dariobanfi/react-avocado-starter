import React from 'react';
import { shallow } from 'enzyme';

import Menu from '../../../../app/components/header/Menu';

describe('<Home />', () => {
  test('renders', () => {
    const wrapper = shallow(<Menu />);
    expect(wrapper).toMatchSnapshot();
  });
});
