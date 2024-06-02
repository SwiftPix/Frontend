/* eslint-disable react/destructuring-assignment */
// Import Reacts Componentes
import React from 'react';
import { Text, View, TouchableOpacity, Dimensions, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from './styles';

// Import Images
import trophy from '../../assets/trophy.png';

// Interface
const WIDTH = Dimensions.get('window').width;
const HEIGHT_MODAL = '55%';

const ModalFinishRegis = (props, { children }) => {
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
          borderRadius: 15,
          elevation: 2,
        }}
      >
        <TouchableOpacity
          style={styles.closeButton}
          testID='closeButton'
          onPress={() => closeModal(false, 'Cancel')}
        >
          <Icon
            name="times"
            size={35}
            color="#6C6C6C"
            style={styles.iconClose}
          />
        </TouchableOpacity>
        <Image style={styles.imgTrophy} source={trophy} />
        <Text style={styles.title}>
          Parabéns! Você concluiu todos os passos.
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ModalFinishRegis;
