import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react-native';
import { NpsSheet } from './NpsSheet';

describe('NpsSheet component test', () => {
  it('should match snapshot', () => {
    const tree = renderer
      .create(<NpsSheet title="" onPress={() => null} step={1} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render NpsSheet styles', () => {
    const rendered = render(
      <NpsSheet title="" onPress={() => null} step={1} />
    );
    const component = rendered.getByTestId('npsSheet-title');
    expect(component.props.style).toMatchObject({
      fontSize: 18,
      lineHeight: 24,
      letterSpacing: 0.3,
      color: '#373764',
      fontFamily: 'Poppins-SemiBold',
    });
  });

  it('should render npsSheet-boxTextTitle styles', () => {
    const rendered = render(
      <NpsSheet title="" onPress={() => null} step={1} />
    );
    const component = rendered.getByTestId('npsSheet-boxTextTitle');
    expect(component.props.style).toMatchObject({
      lineHeight: 20,
      letterSpacing: 0.2,
      color: '#373764',
      fontFamily: 'Inter-Regular',
    });
  });
});
