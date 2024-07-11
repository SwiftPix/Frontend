// Import React Components
import React, { useState, useContext } from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import { useRoute } from '@react-navigation/native';
import { TextInputMask } from 'react-native-masked-text';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Accordion from 'react-native-accordion-wrapper';
import logo from '../../../assets/logoTop.png';
import CountryPicker from 'react-native-country-picker-modal';

// Import Styles
import styles from './styles';

// Import Component Keyboar Avoinding Wrapper
import KeyboardAvoidingWrapper from '../../components/KeyboardWrapper';

// Import API Back End
import { getUserByKey } from '../../services/api';

// Import Transction Context
import { TransctionContext } from '../../context/transactionContext';


// Interface
const SelectKeyScreen = ({ navigation }) => {
  const context = useContext(TransctionContext);
  const [cpf, onChangeText] = useState('');
  const [cell, onChangeText1] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('BR'); 
  const route = useRoute();
  const { country_iso_2 } = route.params;

  const getKey = async () => {
    const key = cpf.replace('.', '').replace('.', '').replace('-', '');
    try {
      const user_data = await getUserByKey(key);
      context.setTransaction((transaction) => ({
        ...transaction,
        key: user_data.key,
        to: {
          id: user.user_id,
          name: user.name,
          cpf: user_data.key,
        },
      }));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <KeyboardAvoidingWrapper>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <Image style={styles.headerImg} source={logo} />
          <Text style={styles.selectTitle}>Escolha o tipo de chave</Text>
          <View style={styles.accordion}>
            <Accordion
              shouldSelectOneItemAtATime
              headerItemsStyle={{
                backgroundColor: '#f4f4f4',
                paddingLeft: '10%',
              }}
              headerTitleLabelStyle={styles.keyText}
              dataSource={[
                {
                  title: 'CPF/CNPJ',
                  child: (
                    <TextInputMask
                      type="cpf"
                      value={cpf}
                      placeholder="CPF/CNPJ"
                      keyboardType="numeric"
                      style={styles.input}
                      onChangeText={(text) => onChangeText(text)}
                    />
                  ),
                },
                {
                  title: 'Celular',
                  child: (
                    <TextInputMask
                      type="cel-phone"
                      options={{
                        maskType: 'BRL',
                        withDDD: true,
                        dddMask: '(99) ',
                      }}
                      value={cell}
                      placeholder="Celular"
                      keyboardType="numeric"
                      style={styles.input}
                      onChangeText={(text) => onChangeText1(text)}
                    />
                  ),
                },
                {
                  title: 'E-mail',
                  child: (
                    <TextInput placeholder="E-mail" style={styles.input} />
                  ),
                },
                {
                  title: 'Aleatória',
                  child: (
                    <TextInput placeholder="Aleatória" style={styles.input} />
                  ),
                },
              ]}
            />
          </View>
          <CountryPicker
            containerButtonStyle={styles.selectCountry}
            translation="por"
            countryCodes={{country_iso_2}}
            onSelect={(country) => setSelectedCountry(country.cca2)}
            countryCode={selectedCountry} 
            withCountryNameButton
            modalProps={{ visible: false }}
          />
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('ValueTransferScreen');
            getKey();
          }}
          style={styles.doneButton}
        >
          <Text style={styles.nextText}>Avançar</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </KeyboardAvoidingWrapper>
  );
};

export default SelectKeyScreen;
