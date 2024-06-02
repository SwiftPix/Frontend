import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import ModalOnboarding from './modalOnb';

// Mocking the navigation object
const mockNavigate = jest.fn();

jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({
    navigate: mockNavigate,
  }),
}));

describe('ModalOnboarding', () => {
  it('renders correctly', () => {
    const mockChangeModalVisible = jest.fn();
    const mockSetData = jest.fn();
    const { getByText } = render(
      <ModalOnboarding changeModalVisible={mockChangeModalVisible} setData={mockSetData} />
    );

    expect(getByText('Fique tranquilo')).toBeTruthy();
    expect(getByText('Este é um ambiente 100% protegido e seus dados serão guardados com segurança.')).toBeTruthy();
    expect(getByText('Tenha em mãos seu documento de identidade(RG,CNH ou RNE).')).toBeTruthy();
    expect(getByText('Você precisará dele mais adiante.')).toBeTruthy();
  });

  it('closes modal and navigates on done button press', () => {
    jest.useFakeTimers();
    const mockChangeModalVisible = jest.fn();
    const mockSetData = jest.fn();
    const { getByText } = render(
      <ModalOnboarding changeModalVisible={mockChangeModalVisible} setData={mockSetData} />
    );

    fireEvent.press(getByText('Ok, entendi!'));
    expect(mockChangeModalVisible).toHaveBeenCalledWith(false);
    expect(mockSetData).toHaveBeenCalledWith('Cancel');
    expect(mockNavigate).toHaveBeenCalledWith('LoadingAppScreen');

    // Simulate the timeout
    jest.advanceTimersByTime(4000);
    expect(mockNavigate).toHaveBeenCalledWith('DocChoiceScreen');
    jest.useRealTimers();
  });
});