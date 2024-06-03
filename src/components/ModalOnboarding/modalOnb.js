/* eslint-disable react/destructuring-assignment */
// Import Reacts Componentes
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, View, TouchableOpacity, Dimensions, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from './styles';

// Import Images
import security from '../../assets/security.png';

// Interface
const WIDTH = Dimensions.get('window').width;
const HEIGHT_MODAL = '65%';

const ModalOnboarding = (props) => {
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
        <Image style={styles.imgSecurity} source={security} />
        <Text style={styles.title}>Fique tranquilo</Text>
        <Text style={styles.description}>
          Este é um ambiente 100% protegido e seus dados serão guardados com
          segurança.
        </Text>
        <View style={styles.line} />
        <Text style={styles.description2}>
          {' '}
          Tenha em mãos seu documento de identidade(RG,CNH ou RNE).
        </Text>
        <Text style={styles.alert}>Você precisará dele mais adiante para cadastrar seus dados.</Text>

        <TouchableOpacity
          style={styles.doneButton}
          onPress={() => {
            closeModal(false, 'Cancel');
            navigation.navigate('LoadingAppScreen');
            setTimeout(() => {
              navigation.navigate('DocChoiceScreen');
            }, 4000);
          }}
        >
          <Text style={styles.doneText}>Ok, entendi!</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default ModalOnboarding;
