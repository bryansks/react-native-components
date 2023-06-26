import React from 'react';
import { render, screen } from '@testing-library/react-native';

import { Row } from './Row';

describe('MyOrdersScreen component test', () => {
  it('should render MyOrdersScreen component successfully', () => {
    render(
      <Row>
        <></>
      </Row>
    );
    expect(screen).toBeTruthy();
  });

  it('should render title styles', () => {
    const rendered = render(
      <Row>
        <></>
      </Row>
    );
    const component = rendered.getByTestId('row-container');
    expect(component.props.style.flexDirection).toBe('row');
  });
});
