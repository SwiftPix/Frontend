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
import CountryPickerModal from 'react-native-country-picker-modal';

// Import Styles
import styles from './styles';

// Import Component Keyboar Avoinding Wrapper
import KeyboardAvoidingWrapper from '../../components/KeyboardWrapper';

// Import API Back End
import { keysApi } from '../../services/api';

// Import Transction Context
import { TransctionContext } from '../../context/transactionContext';

// Import Images
import iconQRCode from '../../../assets/qr-code.png';

// Interface
const SelectKeyScreen = ({ navigation }) => {
  const context = useContext(TransctionContext);
  const [cpf, onChangeText] = useState('');
  const [cell, onChangeText1] = useState('');
  const [selectedCountry, setSelectedCountry] = useState(null);

  const getKey = () => {
    keysApi
      .get(`/${cpf.replace('.', '').replace('.', '').replace('-', '')}`)
      .then((res) => {
        const data = res.data.chave_valid;
        context.setTransaction((transaction) => ({
          ...transaction,
          key: data.key,
          to: {
            id: data.id,
            name: data.name,
            cpf: data.cpf,
            institution: data.institution,
            agency: data.agency,
            account: data.account,
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
            <CountryPickerModal style={styles.selectCountry}
              visible
              withFilter
              onSelect={(country) => setSelectedCountry(country)}
              countryCode={selectedCountry?.cca2}
              withCountryNameButton
            />
        </View>
        {/* <TouchableOpacity style={styles.qrcodeContainer}>
          <Image style={styles.qrcode} source={iconQRCode} />
          <Text style={styles.qrcodeText}>QR Code</Text>
        </TouchableOpacity> */}
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
