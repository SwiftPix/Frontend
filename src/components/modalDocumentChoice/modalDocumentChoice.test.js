import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import ModalDocumentChoice from './modalDocumentChoice';

// Mocking the navigation object
const mockNavigate = jest.fn();

jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({
    navigate: mockNavigate,
  }),
}));

describe('ModalDocumentChoice', () => {
  const mockChangeModalVisible = jest.fn();
  const mockSetData = jest.fn();

  beforeEach(() => {
    mockChangeModalVisible.mockClear();
    mockSetData.mockClear();
    mockNavigate.mockClear();
  });

  it('renders correctly', () => {
    const { getByText } = render(
      <ModalDocumentChoice changeModalVisible={mockChangeModalVisible} setData={mockSetData} />
    );

    expect(getByText('Para continuar, tire uma foto sua')).toBeTruthy();
  });

  it('closes modal on press close button', async () => {
    const { getByTestId } = render(
      <ModalDocumentChoice changeModalVisible={mockChangeModalVisible} setData={mockSetData} />
    );

    fireEvent.press(getByTestId('closeButton'));
    
    await waitFor(() => {
      expect(mockChangeModalVisible).toHaveBeenCalledWith(false);
      expect(mockSetData).toHaveBeenCalledWith('Cancel');
    });
  });

  it('navigates to Biometrics on done button press', async () => {
    const { getByTestId } = render(
      <ModalDocumentChoice changeModalVisible={mockChangeModalVisible} setData={mockSetData} />
    );

    fireEvent.press(getByTestId('doneButton'));
    
    await waitFor(() => {
      expect(mockChangeModalVisible).toHaveBeenCalledWith(false);
      expect(mockSetData).toHaveBeenCalledWith('Cancel');
      expect(mockNavigate).toHaveBeenCalledWith('Biometrics');
    });
  });
});