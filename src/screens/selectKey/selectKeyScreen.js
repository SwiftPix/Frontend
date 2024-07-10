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
import { keysApi } from '../../services/api';

// Import Transction Context
import { TransctionContext } from '../../context/transactionContext';


// Interface
const SelectKeyScreen = ({ navigation }) => {
  const context = useContext(TransctionContext);
  const [cpf, onChangeText] = useState('');
  const [cell, onChangeText1] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('BR'); 

  const getKey = () => {
    keysApi
      .get(`/${cpf.replace('.', '').replace('.', '').replace('-', '')}`)
      .then((res) => {
        const data = res.data.chave_valid;
        context.setTransaction((transaction) => ({
          ...transaction,
          key: data.key,
          to: {
            id: data.to.id,
            name: data.to.name,
            cpf: data.to.cpf,
            institution: data.to.institution,
            agency: data.to.agency,
            account: data.to.account,
          },
        }));
      })
      .catch((err) => {
        console.log(err);
      });
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
          <Text style={styles.selectTitle}>Selecionar País onde você está:</Text>
          <CountryPicker
            containerButtonStyle={styles.selectCountry}
            translation="por"
            placeholder={'Selecione o país de destino'}
            filterProps={{
              placeholder: 'Nome do país',
            }}
            withFilter
            onSelect={(country) => setSelectedCountry(country.cca2)}
            countryCode={selectedCountry} 
            withCountryNameButton
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
