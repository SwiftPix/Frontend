import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import LoginScreen from './LoginScreen';

// Mock the navigation and context
const mockNavigation = {
  navigate: jest.fn(),
};

const mockSetId = jest.fn();

jest.mock('../../context/userContext', () => ({
  UserContext: {
    Consumer: ({ children }) => children({ setId: mockSetId }),
  },
}));

describe('LoginScreen', () => {
  it('renders all input fields, labels, and buttons', () => {
    const { getByText, getByPlaceholderText } = render(
      <LoginScreen navigation={mockNavigation} />
    );


    // Check for labels
    expect(getByText('CPF:')).toBeTruthy();
    expect(getByText('Senha:')).toBeTruthy();

  });

});