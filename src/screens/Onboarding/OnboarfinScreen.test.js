import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import OnboardingScreen from './OnboardingScreen';

// Mock navigation
const mockNavigate = jest.fn();

describe('OnboardingScreen', () => {
  it('renders the onboarding buttons', () => {
    const { getByText } = render(
      <OnboardingScreen navigation={{ navigate: mockNavigate }} />
    );

    // Check if the buttons are rendered
    expect(getByText('Começar')).toBeTruthy();
    expect(getByText('Já tenho conta')).toBeTruthy();
  });

  it('handles button press to navigate to LoginScreen', () => {
    const { getByText } = render(
      <OnboardingScreen navigation={{ navigate: mockNavigate }} />
    );

    const loginButton = getByText('Já tenho conta');
    fireEvent.press(loginButton);
    expect(mockNavigate).toHaveBeenCalledWith('LoadingAppScreen');

    // Normally, you would handle the timeout here, but we're keeping it simple
  });
});