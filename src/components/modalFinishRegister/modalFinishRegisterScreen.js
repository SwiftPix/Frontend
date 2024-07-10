// Import React Components
import React, { useState } from 'react';
import { Text, View, TouchableOpacity, Dimensions, Image, Modal, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import trophy from '../../assets/trophy.png';

// Interface
const WIDTH = Dimensions.get('window').width;
const HEIGHT_MODAL = '55%';

const ModalFinishRegis = () => {
  const [isModalVisible, setModalVisible] = useState(true);

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <Modal
      transparent={true}
      animationType="slide"
      visible={isModalVisible}
      onRequestClose={closeModal}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalView}>
          <TouchableOpacity
            style={styles.closeButton}
            onPress={closeModal}
            testID="closeButton"
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
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    height: HEIGHT_MODAL,
    width: WIDTH - 60,
    paddingTop: 10,
    backgroundColor: '#FAFBFE',
    borderRadius: 15,
    elevation: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  iconClose: {
    padding: 5,
  },
  imgTrophy: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    textAlign: 'center',
    margin: 10,
    fontFamily: 'boldIBM',
  },
});

export default ModalFinishRegis;
