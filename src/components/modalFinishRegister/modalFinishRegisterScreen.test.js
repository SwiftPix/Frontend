import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import ModalFinishRegis from './modalFinishRegisterScreen';

describe('ModalFinishRegis', () => {
  it('renders correctly', () => {
    const mockChangeModalVisible = jest.fn();
    const mockSetData = jest.fn();
    const { getByText } = render(
      <ModalFinishRegis changeModalVisible={mockChangeModalVisible} setData={mockSetData} />
    );

    expect(getByText('Parabéns! Você concluiu todos os passos.')).toBeTruthy();
  });

  it('closes modal on press close button', () => {
    const mockChangeModalVisible = jest.fn();
    const mockSetData = jest.fn();
    const { getByTestId } = render(
      <ModalFinishRegis changeModalVisible={mockChangeModalVisible} setData={mockSetData} />
    );

    fireEvent.press(getByTestId('closeButton'));
    expect(mockChangeModalVisible).toHaveBeenCalledWith(false);
    expect(mockSetData).toHaveBeenCalledWith('Cancel');
  });
});