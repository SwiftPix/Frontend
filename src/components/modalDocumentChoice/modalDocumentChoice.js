/* eslint-disable react/destructuring-assignment */
// Import Reacts Componentes
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, View, TouchableOpacity, Dimensions, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from './styles';

// Import Images
import takePicture from '../../assets/takePicture.png';

// Interface
const WIDTH = Dimensions.get('window').width;
const HEIGHT_MODAL = '77%';

const ModalDocumentChoice = (props) => {
  const navigation = useNavigation();
  const closeModal = (bool, data) => {
    props.changeModalVisible(bool);
    props.setData(data);
  };
  return (
    <TouchableOpacity disabled style={styles.container}>
      <View
        style={{
          height: HEIGHT_MODAL,
          width: WIDTH - 60,
          paddingTop: 10,
          backgroundColor: '#FAFBFE',
          borderRadius: 5,
          elevation: 2,
        }}
      >
        <TouchableOpacity
          style={styles.closeButton}
          onPress={() => closeModal(false, 'Cancel')}
        >
          <Icon
            name="times"
            size={35}
            color="#6C6C6C"
            style={styles.iconClose}
          />
        </TouchableOpacity>
        <Image style={styles.imgTakePicture} source={takePicture} />
        <Text style={styles.title}>
          Para continuar, tire uma foto sua 
        </Text>
        <Text style={styles.subtitles}>Instruções:</Text>
        <Text style={styles.topic}>
          • Tire uma foto em um local bem iluminado
        </Text>
        <Text style={styles.topic}>
          • Para evitar erros, tire a foto em um fundo branco 
        </Text>
        <View style={styles.line} />
        <TouchableOpacity
          style={styles.doneButton}
          onPress={() => {
            closeModal(false, 'Cancel');
            navigation.navigate('Biometrics');
          }}
        >
          <Text style={styles.doneText}>Vamos lá</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default ModalDocumentChoice;
