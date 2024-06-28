import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
  Modal,
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TextInput
} from 'react-native';
import { TextInputMask } from 'react-native-masked-text';
import { useNavigation } from '@react-navigation/native';
import LoadingAppScreen from '../../screens/loadingApp/loadingAppScreen';
import ModalDocumentChoice from '../../components/modalDocumentChoice/modalDocumentChoice';
import logo from '../../../assets/logoTop.png';
import styles from './styles';
import { createUser } from '../../services/api'; 


const DocChoiceScreen = () => {
  const navigation = useNavigation();
  const [isModalVisible, setisModalVisible] = useState(false);
  const [chooseData, setChooseData] = useState();
  const [cpf, setCpf] = useState('');
  const [cellphone, setCellphone] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const changeModalVisible = (bool) => {
    setisModalVisible(bool);
  };

  const setData = (data) => {
    setChooseData(data);
  };

  const handleRegister = async () => {
    setLoading(true);
    try {
      await createUser({ name,email, cpf, cellphone, password });
      setLoading(false);
      navigation.navigate('biometricScreen');
    } catch (error) {
      setLoading(false);
      Alert.alert('Erro', 'Não foi possível criar o usuário. Tente novamente.');
    }
  };

  if (loading) {
    return <LoadingAppScreen />;
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <SafeAreaView style={styles.container}>
          <View style={styles.logoView}>
            <Image style={styles.headerImg} source={logo} />
          </View>
          <View style={styles.guideTextContainer}>
            <Text style={styles.guideText}>
              Vamos criar uma conta no SwiftPix!
            </Text>
            <Text style={styles.secondaryGuideText}>
              Insira seu CPF para começar. Ele será usado como sua principal identificação no SwiftPix.
            </Text>
          </View>
          <View style={styles.inputs}>
            <View style={styles.inputContainer}>
              <Text style={styles.registerText}>Nome:</Text>
              <TextInput
                value={name}
                style={styles.input}
                placeholder='Nome'
                placeholderTextColor='#DEDEDE'
                onChangeText={setName}
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.registerText}>E-mail:</Text>
              <TextInput
                value={email}
                style={styles.input}
                placeholder='E-mail'
                placeholderTextColor='#DEDEDE'
                onChangeText={setEmail}
              />
            </View>
            
            <View style={styles.inputContainer}>
              <Text style={styles.registerText}>CPF:</Text>
              <TextInputMask
                type="cpf"
                placeholder='000.000.000-00'
                placeholderTextColor='#DEDEDE'
                value={cpf}
                keyboardType="numeric"
                style={styles.input}
                onChangeText={setCpf}
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.registerText}>Celular:</Text>
              <TextInput
                value={cellphone}
                placeholder='(00)0000-0000'
                placeholderTextColor='#DEDEDE'
                keyboardType="numeric"
                style={styles.input}
                onChangeText={setCellphone}
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.registerText}>Senha:</Text>
              <TextInput
                value={password}
                placeholder='Senha'
                placeholderTextColor='#DEDEDE'
                style={styles.input}
                secureTextEntry
                onChangeText={setPassword}
              />
            </View>
 
            </View>
          <TouchableOpacity
            style={styles.buttonNext}
            onPress={handleRegister}
          >
            <Text style={styles.textNext}>Avançar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonBack}
            onPress={() => navigation.navigate('OnboardingScreen')}
          >
            <Text style={styles.textBack}>Voltar</Text>
          </TouchableOpacity>
          <Modal
            transparent
            animationType="fade"
            visible={isModalVisible}
            onRequestClose={() => changeModalVisible(false)}
          >
            <ModalDocumentChoice
              changeModalVisible={changeModalVisible}
              setData={setData}
            />
          </Modal>
        </SafeAreaView>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default DocChoiceScreen;