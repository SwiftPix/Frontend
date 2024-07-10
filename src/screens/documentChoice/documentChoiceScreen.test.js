import React from 'react';
import { render } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';
import DocChoiceScreen from './documentChoiceScreen';

describe('DocChoiceScreen', () => {
  it('renders correctly', () => {
    const { getByPlaceholderText } = render(
      <NavigationContainer>
        <DocChoiceScreen />
      </NavigationContainer>
    );

    // Check if the inputs are rendered
    expect(getByPlaceholderText('Nome')).toBeTruthy();
    expect(getByPlaceholderText('CPF')).toBeTruthy();
    // Add more expectations for other fields if necessary
  });
});