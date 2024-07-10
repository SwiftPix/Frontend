import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import LoginRegisScreen from './LoginRegisScreen';

// Mock the navigation prop
const mockNavigate = jest.fn();
const mockNavigation = {
  navigate: mockNavigate,
};

describe('LoginRegisScreen', () => {
  it('renders the logo, description, and buttons', () => {
    const { getByText } = render(<LoginRegisScreen navigation={mockNavigation} />);

    // Check if the description text is rendered
    expect(getByText('Seu app de Internet Banking')).toBeTruthy();

    // Check if the registration button is rendered
    expect(getByText('Abrir uma conta no SwiftPix')).toBeTruthy();

    // Check if the login button is rendered
    expect(getByText('Já possuo cadastro')).toBeTruthy();
  });

  it('navigates to the login screen when the login button is pressed', () => {
    const { getByText } = render(<LoginRegisScreen navigation={mockNavigation} />);
    const loginButton = getByText('Já possuo cadastro');
    fireEvent.press(loginButton);
    expect(mockNavigate).toHaveBeenCalledWith('LoginScreen');
  });
});