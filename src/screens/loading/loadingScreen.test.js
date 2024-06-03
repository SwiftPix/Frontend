import React from 'react';
import { render } from '@testing-library/react-native';
import LoadingScreen from './loadingScreen';

describe('LoadingScreen', () => {
  it('renders the loading indicators, text, and logo', () => {
    const { getByText, getByTestId } = render(<LoadingScreen />);

    // Check if the loading text is rendered
    expect(getByText('Carregando')).toBeTruthy();

    // Check if the activity indicator is rendered
    expect(getByTestId('activity-indicator')).toBeTruthy();

    // Check if the logo image is rendered
    expect(getByTestId('logo-image')).toBeTruthy();
  });
});