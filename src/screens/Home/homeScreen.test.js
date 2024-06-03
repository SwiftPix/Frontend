// HomeScreen.test.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import HomeScreen from './homeScreen';
import { UserContext } from '../../context/userContext';

jest.mock('react-native-vector-icons/FontAwesome5', () => 'Icon');
jest.mock('../../components/HomeScreenHideContent/HideContent', () => () => 'HideContent');
jest.mock('../../../assets/notification.png', () => 'NotificationIcon');
jest.mock('../../../assets/settings.png', () => 'SettingsIcon');
jest.mock('../../../assets/user.png', () => 'UserIcon');
jest.mock('../../../assets/pix.png', () => 'PixIcon');
jest.mock('../../../assets/key.png', () => 'KeyIcon');
jest.mock('../../../assets/crown.png', () => 'CrownIcon');
jest.mock('@react-navigation/native', () => ({
  useIsFocused: jest.fn(() => true),
}));
jest.mock('react-native-vector-icons/FontAwesome5', () => {
    return ({ name, size, color, style }) => (
      <text style={style} color={color} size={size}>{name}</text>
    );
  });

const mockNavigation = {
  navigate: jest.fn(),
};

const wrapper = ({ children }) => (
  <UserContext.Provider value={{ id: '123', setBalance: jest.fn() }}>
    {children}
  </UserContext.Provider>
);

describe('HomeScreen', () => {
  it('renders correctly and shows initial UI components', () => {
    const { getByText, getByTestId } = render(<HomeScreen navigation={mockNavigation} />, { wrapper });

    expect(getByText('Olá, usuário 123')).toBeTruthy();
    expect(getByTestId('NotificationIcon')).toBeTruthy();
    expect(getByTestId('SettingsIcon')).toBeTruthy();
    expect(getByTestId('UserIcon')).toBeTruthy();
    expect(getByText('Saldo disponível')).toBeTruthy();
    expect(getByText('Ver Extrato')).toBeTruthy();
    expect(getByText('Pagar por Pix')).toBeTruthy();
    expect(getByText('Minhas chaves')).toBeTruthy();
    expect(getByText('Meus favoritos')).toBeTruthy();
  });

  it('navigates to the StatementScreen when the "Ver Extrato" button is pressed', () => {
    const { getByText } = render(<HomeScreen navigation={mockNavigation} />, { wrapper });
    const statementButton = getByText('Ver Extrato');

    fireEvent.press(statementButton);
    expect(mockNavigation.navigate).toHaveBeenCalledWith('StatementScreen');
  });

  it('navigates to the SelectKeyScreen when the "Pagar por Pix" button is pressed', () => {
    const { getByText } = render(<HomeScreen navigation={mockNavigation} />, { wrapper });
    const pixButton = getByText('Pagar por Pix');

    fireEvent.press(pixButton);
    expect(mockNavigation.navigate).toHaveBeenCalledWith('SelectKeyScreen');
  });
});