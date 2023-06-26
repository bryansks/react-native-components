import React from 'react';
import { render, screen } from '@testing-library/react-native';

import { Container } from './Container';

describe('MyOrdersScreen component test', () => {
  it('should render MyOrdersScreen component successfully', () => {
    render(
      <Container>
        <></>
      </Container>
    );
    expect(screen).toBeTruthy();
  });
});
