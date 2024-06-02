import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import ModalDocumentChoice from './modalDocumentChoice';

// Mocking the navigation object
const mockNavigate = jest.fn();

jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({
    navigate: mockNavigate,
  }),
}));

describe('ModalDocumentChoice', () => {
  it('renders correctly', () => {
    const mockChangeModalVisible = jest.fn();
    const mockSetData = jest.fn();
    const { getByText } = render(
      <ModalDocumentChoice changeModalVisible={mockChangeModalVisible} setData={mockSetData} />
    );

    expect(getByText('Para continuar, tire uma foto da frente do seu RG, CNH ou RNE')).toBeTruthy();
  });

  it('closes modal on press close button', () => {
    const mockChangeModalVisible = jest.fn();
    const mockSetData = jest.fn();
    const { getByTestId } = render(
      <ModalDocumentChoice changeModalVisible={mockChangeModalVisible} setData={mockSetData} />
    );

    fireEvent.press(getByTestId('closeButton'));
    expect(mockChangeModalVisible).toHaveBeenCalledWith(false);
    expect(mockSetData).toHaveBeenCalledWith('Cancel');
  });

  it('navigates to FinishRegister on done button press', () => {
    const mockChangeModalVisible = jest.fn();
    const mockSetData = jest.fn();
    const { getByTestId } = render(
      <ModalDocumentChoice changeModalVisible={mockChangeModalVisible} setData={mockSetData} />
    );

    fireEvent.press(getByTestId('doneButton'));
    expect(mockChangeModalVisible).toHaveBeenCalledWith(false);
    expect(mockSetData).toHaveBeenCalledWith('Cancel');
    expect(mockNavigate).toHaveBeenCalledWith('FinishRegister');
  });
});