import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import DocChoiceScreen from './documentChoiceScreen';

// Mocking necessary components and modules
jest.mock('react-native-vector-icons/FontAwesome5', () => 'Icon');
jest.mock('../../components/modalDocumentChoice/modalDocumentChoice', () => {
  return function MockModalDocumentChoice({ changeModalVisible, setData }) {
    return (
      <text onPress={() => changeModalVisible(false)}>MockModalDocumentChoice</text>
    );
  };
});

describe('DocChoiceScreen', () => {
  const mockNavigation = { goBack: jest.fn() };

  it('renders all elements correctly', () => {
    const { getByText } = render(<DocChoiceScreen navigation={mockNavigation} />);
    expect(getByText('Tire um foto da frente e verso do seu documento.')).toBeTruthy();
    expect(getByText('Escolha qual dos documentos abaixo você deseja enviar.')).toBeTruthy();
    expect(getByText('Documento')).toBeTruthy();
    expect(getByText('RG')).toBeTruthy();
    expect(getByText('CNH')).toBeTruthy();
    expect(getByText('RNE(estrangeiro)')).toBeTruthy();
    expect(getByText('Avançar')).toBeTruthy();
    expect(getByText('Voltar')).toBeTruthy();
  });

});