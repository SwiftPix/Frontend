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

// Import Component
import ModalDocumentChoice from '../../components/modalDocumentChoice/modalDocumentChoice';

// Import images
import logo from '../../../assets/logoTop.png';

// Interface
const DocChoiceScreen = ({ navigation }) => {
  const [isModalVisible, setisModalVisible] = useState(false);
  const [chooseData, setChooseData] = useState();

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
        Tire um foto da frente e verso do seu documento.
      </Text>
      <Text style={styles.description}>
        Escolha qual dos documentos abaixo você deseja enviar.
      </Text>
      <Text style={styles.subtitle}>Documento</Text>
      <View style={styles.radioButtons}>
        <View style={{ flexDirection: 'row' }}>
          <RadioButton
            color="#00A896"
            value="RG"
            status={checked === 'RG' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('RG')}
          />
          <Text style={styles.typeDocument}>RG</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <RadioButton
            color="#00A896"
            value="CNH"
            status={checked === 'CNH' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('CNH')}
          />
          <Text style={styles.typeDocument}>CNH</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <RadioButton
            color="#00A896"
            value="RNE"
            status={checked === 'RNE' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('RNE')}
          />
          <Text style={styles.typeDocument}>RNE(estrangeiro)</Text>
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
