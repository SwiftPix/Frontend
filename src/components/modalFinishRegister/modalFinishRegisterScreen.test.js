import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import ModalFinishRegis from './modalFinishRegisterScreen';

describe('ModalFinishRegis Component', () => {

  it('should close the modal when the close button is pressed', () => {
    const { getByTestId, queryByText } = render(<ModalFinishRegis />);

    const closeButton = getByTestId('closeButton');
    fireEvent.press(closeButton);

    // After closing the modal, the text should no longer be present
    expect(queryByText('Parabéns! Você concluiu todos os passos.')).toBeNull();
  });
});