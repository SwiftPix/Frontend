/* eslint-disable no-unused-vars */
// Import React Components
import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
  Modal,
} from 'react-native';
import { RadioButton } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from './styles';
import { TextInput } from 'react-native-gesture-handler';
import { TextInputMask } from 'react-native-masked-text';

// Import Component
import ModalDocumentChoice from '../../components/modalDocumentChoice/modalDocumentChoice';

// Import images
import logo from '../../../assets/logoTop.png';

// Interface
const DocChoiceScreen = ({ navigation }) => {
  const [isModalVisible, setisModalVisible] = useState(false);
  const [chooseData, setChooseData] = useState();
  const [cpf, onChangeText] = useState('');
  const [name, onChangeName] = useState('');
  const [password, onChangeNumber] = useState(null);

  const changeModalVisible = (bool) => {
    setisModalVisible(bool);
  };
  const setData = (data) => {
    setChooseData(data);
  };
  const [checked, setChecked] = useState('');
  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.headerImg} source={logo} />
      <Text style={styles.guideText}>
        Digite seus dados para realizar seu cadastro
      </Text>

      <Text style={styles.registerText}>Nome:</Text>
          <TextInput
            value={Text}
            style={styles.input}
            onChangeNumber={(text) => onChangeName(text)}
          />

      <Text style={styles.registerText}>CPF:</Text>
          <TextInputMask
            type="cpf"
            value={cpf}
            keyboardType="numeric"
            style={styles.input}
            onChangeText={(text) => onChangeText(text)}
          />
      <Text style={styles.registerText}>Senha:</Text>
          <TextInput
            value={password}
            style={styles.input}
            secureTextEntry
            onChangeNumber={(text) => onChangeNumber(text)}
          />
      <Text style={styles.registerText}> Repetir Senha:</Text>
          <TextInput
            value={password}
            style={styles.input}
            secureTextEntry
            onChangeNumber={(text) => onChangeNumber(text)}
          />
      <TouchableOpacity
        style={styles.buttonNext}
        onPress={() => changeModalVisible(true)}
      >
        <Text style={styles.textNext}>Avançar</Text>
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
      <TouchableOpacity style={styles.buttonBack}>
        <Icon
          name="chevron-left"
          size={25}
          color="#000"
          style={styles.iconBack}
        />
        <Text style={styles.textBack}>Voltar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default DocChoiceScreen;
