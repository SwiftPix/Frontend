import React from 'react';
import { render } from '@testing-library/react-native';
import LoadingAppScreen from './loadingAppScreen';

describe('LoadingAppScreen', () => {
  it('renders the logo and text correctly', () => {
    const { getByTestId } = render(<LoadingAppScreen />);

    // Check if the logo is rendered
    expect(getByTestId('logo-image')).toBeTruthy();

    // Check if the text elements are rendered
    expect(getByTestId('text-by')).toBeTruthy();
    expect(getByTestId('text-ibm')).toBeTruthy();
  });
});