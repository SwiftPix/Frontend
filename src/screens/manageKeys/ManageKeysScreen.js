import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Alert,
  Modal,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import * as Clipboard from 'expo-clipboard';
import { checkKeyExists, createPixKey, getUserKeys } from '../../services/api';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import styles from './styles';

const ManageKeysScreen = ({ route, navigation }) => {
  const { userId } = route.params;
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [keyType, setKeyType] = useState('');
  const [keyValue, setKeyValue] = useState('');
  const [keys, setKeys] = useState([]);

  useEffect(() => {
    const fetchKeys = async () => {
      try {
        const response = await getUserKeys(userId);
        setKeys(response);
      } catch (error) {
        console.error('Erro ao obter chaves PIX do usuário:', error);
      }
    };

    fetchKeys();
  }, [userId]);

  const toggleRegisterModal = () => {
    setShowRegisterModal(!showRegisterModal);
  };

  const handleRegisterKey = async () => {
    try {
      if (keyType === 'aleatoria') {
        setKeyValue(uuidv4());
      } else if (keyValue.trim() === '') {
        Alert.alert('Erro', 'Por favor, insira um valor para a chave.');
        return;
      }

      if (keyType !== 'aleatoria') {
        const keyExists = await checkKeyExists(keyValue);
        if (keyExists) {
          Alert.alert('Erro', 'Esta chave já está em uso.');
          return;
        }
      }

      const keyData = {
        type: keyType,
        key: keyValue,
        user_id: userId,
      };

      console.log('Enviando dados para criar chave PIX:', keyData);

      const response = await createPixKey(keyData);
      console.log('Resposta do servidor ao criar chave PIX:', response);

      setKeys([...keys, keyData]);
      setShowRegisterModal(false);
      setKeyValue('');
      setKeyType('');
      Alert.alert('Sucesso', 'Chave registrada com sucesso!');
    } catch (error) {
      console.error('Erro ao registrar chave:', error);
      Alert.alert('Erro', 'Não foi possível registrar a chave.');
    }
  };

  const handleGenerateRandomKey = () => {
    const randomKey = uuidv4();
    setKeyValue(randomKey);
    setKeyType('aleatoria');
  };

  const copyToClipboard = (key) => {
    Clipboard.setString(key);
    Alert.alert('Sucesso', 'Chave copiada para a área de transferência!');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={20} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Minhas chaves</Text>
      </View>
      <Text style={styles.subtitle}>Gerencie suas chaves para receber transferências pelo PIX.</Text>
      <TouchableOpacity style={styles.registerButton} onPress={toggleRegisterModal}>
        <Text style={styles.registerButtonText}>Registrar chave PIX</Text>
      </TouchableOpacity>
      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>Você pode criar até 5 chaves PIX de até 4 tipos diferentes.</Text>
      </View>

      <View style={styles.keysContainer}>
        {keys.map((key, index) => (
          <View key={index} style={styles.keyItem}>
            <Text style={styles.keyType}>{key.type}</Text>
            <Text style={styles.keyValue}>{key.key}</Text>
            <TouchableOpacity onPress={() => copyToClipboard(key.key)}>
              <Icon name="copy" size={20} color="#000" />
            </TouchableOpacity>
          </View>
        ))}
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={showRegisterModal}
        onRequestClose={toggleRegisterModal}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TouchableOpacity style={styles.modalCloseButton} onPress={toggleRegisterModal}>
              <Icon name="times" size={20} color="#000" />
            </TouchableOpacity>
            <Text style={styles.modalTitle}>Registrar chave PIX</Text>
            <View style={styles.modalKeyInputContainer}>
              <Icon name="envelope" size={20} color="#000" />
              <TextInput
                style={styles.input}
                placeholder="Digite seu e-mail"
                value={keyType === 'email' ? keyValue : ''}
                onFocus={() => setKeyType('email')}
                onChangeText={setKeyValue}
              />
            </View>
            <View style={styles.modalKeyInputContainer}>
              <Icon name="id-card" size={20} color="#000" />
              <TextInput
                style={styles.input}
                placeholder="Digite seu CPF"
                value={keyType === 'cpf' ? keyValue : ''}
                onFocus={() => setKeyType('cpf')}
                onChangeText={setKeyValue}
              />
            </View>
            <View style={styles.modalKeyInputContainer}>
              <Icon name="phone" size={20} color="#000" />
              <TextInput
                style={styles.input}
                placeholder="Digite seu telefone"
                value={keyType === 'telefone' ? keyValue : ''}
                onFocus={() => setKeyType('telefone')}
                onChangeText={setKeyValue}
              />
            </View>
            <View style={styles.modalKeyInputContainer}>
              <Icon name="key" size={20} color="#000" />
              <TouchableOpacity onPress={handleGenerateRandomKey}>
                <Text style={styles.input}>Clique para gerar chave aleatória</Text>
              </TouchableOpacity>
              {keyType === 'aleatoria' && <TextInput style={styles.input} value={keyValue} editable={false} />}
            </View>
            <TouchableOpacity style={styles.modalSaveButton} onPress={handleRegisterKey}>
              <Text style={styles.modalSaveButtonText}>Registrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default ManageKeysScreen;
