import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Alert,
  Modal,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import * as Location from 'expo-location';
import { findUserById, getBalance, getExpenses, getCurrency } from '../../services/api';
import styles from './styles';

const HomeScreen = ({ route, navigation }) => {
  const { userId } = route.params;
  const [user, setUser] = useState(null);
  const [balance, setBalance] = useState('');
  const [transactions, setTransactions] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showBalance, setShowBalance] = useState(false);
  const [location, setLocation] = useState(null);
  const [currency, setCurrency] = useState('');
  const [countryISO2, setCountryISO2] = useState('');
  const [showNotifications, setShowNotifications] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userResponse = await findUserById(userId);
        setUser(userResponse);

        const balanceResponse = await getBalance(userId);
        setBalance(balanceResponse.balance);

        // const transactionsResponse = await getExpenses(userId);
        // setTransactions(transactionsResponse);
      } catch (error) {
        console.error('Failed to load user data:', error);
        Alert.alert('Erro', 'Não foi possível carregar os dados do usuário.');
      }
    };

    if (userId) {
      fetchUserData();
    } else {
      console.error('User ID não encontrado nas props de navegação');
    }
  }, [userId]);

  useEffect(() => {
    const requestLocationPermission = async () => {
      try {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          Alert.alert('Permissão de localização negada');
          return;
        }

        let location = await Location.getCurrentPositionAsync({});
        const { latitude, longitude } = location.coords;
        setLocation({ latitude, longitude });

        try {
          const currencyResponse = await getCurrency(latitude, longitude);
          setCurrency(currencyResponse.currency);
          setCountryISO2(currencyResponse.country_iso2);
        } catch (error) {
          console.error('Erro ao obter moeda:', error);
          Alert.alert('Erro', 'Não foi possível obter a moeda.');
        }
      } catch (error) {
        console.error('Erro ao obter localização:', error);
        Alert.alert('Erro', 'Não foi possível obter a localização.');
      }
    };

    requestLocationPermission();
  }, []);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const toggleBalanceVisibility = () => {
    setShowBalance(!showBalance);
  };

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={showNotifications}
        onRequestClose={toggleNotifications}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TouchableOpacity style={styles.modalCloseButton} onPress={toggleNotifications}>
              <Icon name="times" size={20} color="#000" />
            </TouchableOpacity>
            <Text style={styles.modalTitle}>Últimas notificações</Text>
            <Text style={styles.notificationText}>- Trasnferência realizada</Text>
            <Text style={styles.notificationText}>- Trasnferência recebida</Text>
          </View>
        </View>
      </Modal>
      
      {user && (
        <>
          <View style={styles.header}>
            <TouchableOpacity>
              <Icon name="user" size={20} color="#fff" />
            </TouchableOpacity>
            <Text style={styles.headerText}>Olá, {user.name}!</Text>
            <View style={styles.headerIcons}>
              <TouchableOpacity onPress={() => navigation.navigate('ExpensesScreen')}>
                <Icon name="coins" size={20} color='#fff' style={styles.iconHeader} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('ManageKeysScreen', { userId })}>
                <Icon name="key" size={20} color='#fff' style={styles.iconHeader} />
              </TouchableOpacity>
              <TouchableOpacity onPress={toggleNotifications}>
                <Icon name="bell" size={20} color='#fff' style={styles.iconHeader} />
              </TouchableOpacity>
            </View>
          </View>
          <ScrollView contentContainerStyle={styles.body}>
            <View style={styles.list}>
              <View style={styles.balanceTitle}>
                <Text style={styles.textBalance}>Saldo disponível</Text>
                <TouchableOpacity onPress={toggleBalanceVisibility}>
                  <Icon name={showBalance ? "eye" : "eye-slash"} size={30} color="#00A896" />
                </TouchableOpacity>
              </View>
              {showBalance ? (
                <Text style={styles.balance}>R$ {balance},00</Text>
              ) : (
                <Text style={styles.balance}>***</Text>
              )}
              {transactions.length > 0 ? (
                transactions.map((transaction, index) => (
                  <View style={styles.transactionItem} key={index}>
                    <Text>{transaction.reason} - R$ {transaction.value}</Text>
                    <Text>{new Date(transaction.date).toLocaleDateString()}</Text>
                  </View>
                ))
              ) : (
                <Text>Sem transações recentes</Text>
              )}
            </View>
          </ScrollView>
          <View style={styles.buttons}>
          <TouchableOpacity style={styles.pixBtn} onPress={() => navigation.navigate('SelectKeyScreen', { userId, country_iso_2: countryISO2 })}>
        <Icon name="exchange-alt" size={20} color="#fff" style={styles.pixLogo} />
        <Text style={styles.pixText}>Transferir por Pix</Text>
      </TouchableOpacity>
          </View>
        </>
      )}
    </SafeAreaView>
  );
};

export default HomeScreen;
