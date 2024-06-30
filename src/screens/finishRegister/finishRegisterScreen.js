import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
  Modal,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

// Import Component
import ModalFinishRegis from '../../components/modalFinishRegister/modalFinishRegisterScreen';

// Import images
import logo from '../../../assets/logoTop.png';
import finishArt from '../../assets/finishArt.png';

// Interface
const FinishRegister = () => {
  const navigation = useNavigation();
  const [isModalVisible, setisModalVisible] = useState(true);
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
      <Modal
        transparent
        animationType="fade"
        visible={isModalVisible}
        onRequestClose={() => changeModalVisible(false)}
      >
        <ModalFinishRegis
          changeModalVisible={changeModalVisible}
          setData={setData}
        />
      </Modal>
      <Image style={styles.headerImg} source={logo} />
      <Text style={styles.title}>
        Parabéns! Você concluiu todas as etapas e seus dados já estão sendo
        analisados
      </Text>
      <Text style={styles.description}>
        Agora é com a gente!{' '}
        <Text style={{ fontFamily: 'boldIBM', color: '#000' }}>
          Em até 48 horas
        </Text>{' '}
        você estará apto a acessar o SwiftPix com o CPF e senha cadastrados
      </Text>
      <Image style={styles.imgFinishArt} source={finishArt} />
      <TouchableOpacity 
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
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default FinishRegister;
