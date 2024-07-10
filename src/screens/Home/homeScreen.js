import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Alert,
  Modal,
  Button,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import * as Location from 'expo-location';
import { findUserById, getBalance, getExpenses, getCurrency } from '../../services/api'; // Importar funções do API
import styles from './styles';

import iconNotification from '../../../assets/notification.png';
import iconSettings from '../../../assets/settings.png';
import iconUser from '../../../assets/user.png';
import iconPix from '../../../assets/pix.png';

const HomeScreen = ({ route, navigation }) => {
  const { userId } = route.params; // Obter userId das props de navegação
  const [user, setUser] = useState(null);
  const [balance, setBalance] = useState('');
  const [transactions, setTransactions] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showBalance, setShowBalance] = useState(true); // Estado para controlar a visibilidade do saldo
  const [showKeyModal, setShowKeyModal] = useState(false); // Estado para controlar o modal de gerenciamento de chaves
  const [selectedKey, setSelectedKey] = useState(null); // Estado para controlar a chave selecionada para gerenciamento
  const [location, setLocation] = useState({ latitude: null, longitude: null }); // Estado para a localização
  const [currency, setCurrency] = useState(null);

  // Carregar dados ao montar o componente
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userResponse = await findUserById(userId);
        setUser(userResponse);

        const balanceResponse = await getBalance(userId);
        setBalance(balanceResponse.balance);

        const transactionsResponse = await getExpenses(userId);
        setTransactions(transactionsResponse);
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
        // Solicitar permissão para localização
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          Alert.alert('Permissão de localização negada');
          return;
        }

        // Obter localização atual
        let location = await Location.getCurrentPositionAsync({});
        const { latitude, longitude } = location.coords;
        setLocation({ latitude, longitude });

        try {
          // Obter moeda com base na latitude e longitude
          const currencyResponse = await getCurrency(latitude, longitude);
          setCurrency(currencyResponse);
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

  const toggleKeyModal = (key = null) => {
    setSelectedKey(key);
    setShowKeyModal(!showKeyModal);
  };

  const toggleBalanceVisibility = () => {
    setShowBalance(!showBalance);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={showModal}
        onRequestClose={toggleModal}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TouchableOpacity style={styles.modalCloseButton} onPress={toggleModal}>
              <Icon name="times" size={20} color="#000" />
            </TouchableOpacity>
            <Text style={styles.modalTitle}>Minhas chaves</Text>
            <Text style={styles.modalSubtitle}>Gerencie suas chaves para receber transferências pelo PIX.</Text>
            <TouchableOpacity style={styles.modalButton} onPress={() => { /* Lógica para registrar chave PIX */ }}>
              <Text style={styles.modalButtonText}>Registrar chave PIX</Text>
            </TouchableOpacity>
            <View style={styles.modalInfoContainer}>
              <Text style={styles.modalInfoText}>2 de 5 chaves</Text>
              <Text style={styles.modalInfoDescription}>Você pode criar até 5 chaves PIX de até 4 tipos diferentes.</Text>
            </View>
            <View style={styles.modalKeyItem}>
              <Icon name="id-card" size={20} color='#000' />
              <Text style={styles.modalKeyText}>CPF</Text>
              <Text style={styles.modalKeyValue}>999.999.999-00</Text>
              <TouchableOpacity onPress={() => toggleKeyModal('CPF')}>
                <Icon name="ellipsis-v" size={20} color="#000" />
              </TouchableOpacity>
            </View>
            <View style={styles.modalKeyItem}>
              <Icon name="envelope" size={20} color='#000' />
              <Text style={styles.modalKeyText}>E-mail</Text>
              <Text style={styles.modalKeyValue}>matt@email.com</Text>
              <TouchableOpacity onPress={() => toggleKeyModal('E-mail')}>
                <Icon name="ellipsis-v" size={20} color="#000" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      <Modal
        animationType="slide"
        transparent={true}
        visible={showKeyModal}
        onRequestClose={() => toggleKeyModal()}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TouchableOpacity style={styles.modalCloseButton} onPress={() => toggleKeyModal()}>
              <Icon name="times" size={20} color="#000" />
            </TouchableOpacity>
            <Text style={styles.modalKeyTitle}>{selectedKey}</Text>
            <Text style={styles.modalKeyValue}>{selectedKey === 'CPF' ? '999.999.999-00' : 'matt@email.com'}</Text>
            <TouchableOpacity style={styles.modalKeyAction} onPress={() => { /* Lógica para compartilhar chave */ }}>
              <Icon name="share-alt" size={20} color="#000" />
              <Text style={styles.modalKeyActionText}>Compartilhar chave</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalKeyAction} onPress={() => { /* Lógica para excluir chave */ }}>
              <Icon name="trash" size={20} color="red" />
              <Text style={styles.modalKeyActionText}>Excluir chave</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {user && (
        <>
          <View style={styles.header}>
            <TouchableOpacity>
              <Image style={styles.iconHeader} source={iconUser} />
            </TouchableOpacity>
            <Text style={styles.headerText}>Olá, {user.name}!</Text>
            <View style={styles.headerIcons}>
              <TouchableOpacity>
                <Icon name="coins" size={20} color='#fff' style={styles.iconHeader} />
              </TouchableOpacity>
              <TouchableOpacity onPress={toggleModal}>
                <Icon name="key" size={20} color='#fff' style={styles.iconHeader} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image style={styles.iconHeader} source={iconNotification} />
              </TouchableOpacity>
            </View>
          </View>
          <ScrollView contentContainerStyle={styles.body}>
            <View style={styles.list}>
              <View style={styles.balanceTitle}>
                <Text style={styles.textBalance}>Saldo disponível</Text>
                <TouchableOpacity onPress={toggleBalanceVisibility}>
                  <Icon name={showBalance ? "eye" : "eye-slash"} size={20} color="#000" />
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
            <TouchableOpacity style={styles.pixBtn} onPress={() => navigation.navigate('SelectKeyScreen')}>
              <Image style={styles.pixLogo} source={iconPix} />
              <Text style={styles.pixText}>Transferir por Pix</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.locationContainer}>
            <Text style={styles.locationText}>Latitude: {location.latitude}</Text>
            <Text style={styles.locationText}>Longitude: {location.longitude}</Text>
            <Text>Moeda: {currency}</Text>
          </View>
        </>
      )}
    </SafeAreaView>
  );
};

export default HomeScreen;