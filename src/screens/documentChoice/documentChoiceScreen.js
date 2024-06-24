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
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { TextInputMask } from 'react-native-masked-text';
import { useNavigation } from '@react-navigation/native';


// Import Component
import ModalDocumentChoice from '../../components/modalDocumentChoice/modalDocumentChoice';

// Import images
import logo from '../../../assets/logoTop.png';

// Interface
const DocChoiceScreen = ({ navigation }) => {
  const [isModalVisible, setisModalVisible] = useState(false);
  const [chooseData, setChooseData] = useState();
  const [cpf, onChangeText] = useState('');
  const [celphone, onChangePhone] = useState('');
  const [name, onChangeName] = useState(null);
  const [password, onChangeNumber] = useState(null);

  const changeModalVisible = (bool) => {
    setisModalVisible(bool);
  };
  const setData = (data) => {
    setChooseData(data);
  };
  const [checked, setChecked] = useState('');
  return (
    <ScrollView>
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
            placeholder='Fulano da Silva'
            placeholderTextColor='#DEDEDE'
            onChangeNumber={(text) => onChangeName(text)}
          />
    </View>
      <View style={styles.inputContainer}>
        <Text style={styles.registerText}>CPF:</Text>
          <TextInputMask
            type="cpf"
            value={cpf}
            keyboardType="numeric"
            style={styles.input}
            onChangeText={(text) => onChangeText(text)}
          />
      </View>
      <View style={styles.inputContainer}>
       <Text style={styles.registerText}>Celular:</Text>
          <TextInputMask
                type="cel-phone"
                value={celphone}
                keyboardType="numeric"
                style={styles.input}
                onChangeText={(text) => onChangePhone(text)}
              />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.registerText}>Senha:</Text>
          <TextInput
            value={password}
            style={styles.input}
            secureTextEntry
            onChangeNumber={(text) => onChangeNumber(text)}
          />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.registerText}> Repetir Senha:</Text>
          <TextInput
            value={password}
            style={styles.input}
            secureTextEntry
            onChangeNumber={(text) => onChangeNumber(text)}
          />
      </View>
    </View>
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
      {/* <TouchableOpacity 
          style={styles.buttonBack} 
          onPress={() => navigation.navigate('Onboarding')} 
        >
          <Icon
            name="chevron-left"
            size={25}
            color="#000"
            style={styles.iconBack}
          />
      <Text style={styles.textBack}>Voltar</Text>
    </TouchableOpacity> */}
    </SafeAreaView>
    </ScrollView>
  );
};

export default DocChoiceScreen;
