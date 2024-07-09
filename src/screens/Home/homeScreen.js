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
import { findUserById, getBalance, getExpenses } from '../../services/api'; // Importar funções do API
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
  const [showBalance, setShowBalance] = useState(true); 

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

  const toggleModal = () => {
    setShowModal(!showModal);
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
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Escolha o tipo de chave para cadastro:</Text>
          <Button title="CPF" onPress={() => { Alert.alert("CPF Registrado", "Seu CPF foi registrado."); toggleModal(); }} />
          <Button title="Email" onPress={() => { Alert.alert("E-mail Registrado", "Seu e-mail foi registrado."); toggleModal(); }} />
          <Button title="Telefone" onPress={() => { Alert.alert("Telefone Registrado", "Seu telefone foi registrado."); toggleModal(); }} />
          <Button title="Gerar Chave Aleatória" onPress={() => { Alert.alert("Chave Aleatória", "Uma nova chave aleatória foi gerada e registrada."); toggleModal(); }} />
          <Button title="Cancelar" onPress={toggleModal} />
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
              <TouchableOpacity onPress={() => navigation.navigate('ExpensesScreen') }>
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
            <TouchableOpacity style={styles.pixBtn} onPress={() => navigation.navigate('SelectKeyScreen')}>
              <Image style={styles.pixLogo} source={iconPix} />
              <Text style={styles.pixText}>Transferir por Pix</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </SafeAreaView>
  );
};

export default HomeScreen;
