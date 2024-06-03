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
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from './styles';

// Import Component
import ModalFinishRegis from '../../components/modalFinishRegister/modalFinishRegisterScreen';

// Import images
import logo from '../../../assets/logoTop.png';
import finishArt from '../../assets/finishArt.png';

// Interface
const FinishRegister = ({ navigation }) => {
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
      <Image style={styles.headerImg} source={logo} testID='logoTop'/>
      <Text style={styles.title}>
        Parabéns! Você concluiu todas as etapas e seus dados já estão sendo
        analisados
      </Text>
      <Text style={styles.description}>
        Agora é com a gente!{' '}
        <Text style={{ fontFamily: 'boldIBM', color: '#000' }}>
          Em até 48 horas
        </Text>{' '}
        você receberá um e-mail com os seus dados de acesso ou solicitações de
        documentos.
      </Text>
      <Image style={styles.imgFinishArt} source={finishArt} testID='finishArt' />
      <TouchableOpacity style={styles.buttonHelp}>
        <Text style={styles.textHelp}>Ajuda</Text>
        <Icon
          name="question-circle"
          size={20}
          color="#000"
          style={styles.iconQuestion}
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default FinishRegister;
