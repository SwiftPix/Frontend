import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import FinishRegister from './finishRegisterScreen';

// Mocks
jest.mock('react-native-vector-icons/FontAwesome5', () => 'Icon');
jest.mock('../../components/modalFinishRegister/modalFinishRegisterScreen', () => {
  return function ModalFinishRegis({ changeModalVisible, setData }) {
    return (
      <text onPress={() => changeModalVisible(false)}>ModalFinishRegis</text>
    );
  };
});
jest.mock('../../../assets/logoTop.png', () => 'LogoTop');
jest.mock('../../assets/finishArt.png', () => 'FinishArt');

describe('FinishRegister', () => {
  it('renders all elements correctly', () => {
    const { getByText, getByRole, getByTestId } = render(<FinishRegister />);

    // Check texts
    expect(getByText('Parabéns! Você concluiu todas as etapas e seus dados já estão sendo analisados')).toBeTruthy();
    expect(getByText('Agora é com a gente! Em até 48 horas você receberá um e-mail com os seus dados de acesso ou solicitações de documentos.')).toBeTruthy();
    expect(getByText('Ajuda')).toBeTruthy();

    // Check images
    expect(getByTestId('logoTop')).toBeTruthy();
    expect(getByTestId('finishArt')).toBeTruthy();

  });

  it('handles help button press', () => {
    const { getByText } = render(<FinishRegister />);
    const helpButton = getByText('Ajuda');
    fireEvent.press(helpButton);
    // Add expectations if there are any specific actions performed on help button press
  });
});