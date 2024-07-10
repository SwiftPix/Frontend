import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import FinishRegister from './finishRegisterScreen';
import { NavigationContainer } from '@react-navigation/native';

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
    const { getByText, getByTestId } = render(
      <NavigationContainer>
        <FinishRegister />
      </NavigationContainer>
    );

    // Check texts
    expect(getByText('Parabéns! Você concluiu todas as etapas e seus dados já estão sendo analisados')).toBeTruthy();
    expect(getByText('Agora é com a gente! Em até 48 horas você estará apto a acessar o SwiftPix com o CPF e senha cadastrados')).toBeTruthy();
    expect(getByText('Voltar')).toBeTruthy();

    // Check images
    expect(getByTestId('logoTop')).toBeTruthy();
  });


  it('navigates to Onboarding on press back button', () => {
    const { getByText } = render(
      <NavigationContainer>
        <FinishRegister />
      </NavigationContainer>
    );
    const backButton = getByText('Voltar');
    fireEvent.press(backButton);
    // Add expectations if there are any specific actions performed on back button press
  });
});