// Import React Components
import React, { useState, useContext, useEffect } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView,Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { TextInputMask } from 'react-native-masked-text';
import styles from './styles';

// Import Component Keyboard Avoid Wrapper
import KeyboardAvoidingWrapper from '../../components/KeyboardWrapper';

// Import API Back End
import { findUserById } from '../../services/api';

// Import Context
import { UserContext } from '../../context/userContext';
import { TransctionContext } from '../../context/transactionContext';
import logo from '../../../assets/logoTop.png';

// Interface
const ValueTransferScreen = ({ navigation }) => {
  const userContext = useContext(UserContext);
  const transactionContext = useContext(TransctionContext);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const user = await findUserById(userContext.id);
        setUser(user);
        console.log(user);
      } catch (error) {
        console.log(error);
      }
    }

    fetchUserData();
  }, []);

  const [value, onChangeText] = useState('');
  // const getEndToEndId = () => {
  //   paymentsApi
  //     .post(`/payment/prepare`)
  //     .then((res) => {
  //       transactionContext.setTransaction((transaction) => ({
  //         ...transaction,
  //         amount: value.replace('R$', ''),
  //         endToEndId: res.data.endToEndID,
  //         date: new Date(),
  //         from: {
  //           institution: 'Rigel',
  //           agency: '0001',
  //           id: userContext.id,
  //           name: `User 00${userContext.id}`,
  //           cpf: `0000000000${userContext.id}`,
  //           account: `000000000${userContext.id}`,
  //         },
  //       }));
  //       console.log(res);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };
  return (
    <KeyboardAvoidingWrapper>
      
      <SafeAreaView style={styles.container}>
        <Image style={styles.headerImg} source={logo} />
        <View style={styles.containerbalence}>
        
          <Text style={styles.balenText}>Saldo disponível em conta:</Text>
          <Text style={styles.balenValue}>
            R$ 
          </Text>
        </View>
        <TextInputMask
          type="money"
          options={{
            precision: 2,
            separator: ',',
            delimiter: '.',
            suffixUnit: '',
            getRawValue: '',
          }}
          value={value}
          keyboardType="numeric"
          style={styles.inputValue}
          placeholder="0,00"
          onChangeText={(text) => onChangeText(text)}
        />
        <View style={styles.containerDestination}>
          <Text style={styles.titleDestination}>Você vai transferir para:</Text>
          <Text style={styles.nameDestination}>
            Nome:
          </Text>
          <Text style={styles.cpfDestination}>
            CPF: 
          </Text>
          <Text style={styles.bankDestination}>
            Instituição: 
          </Text>
          <Text style={styles.bankAg}>
            Ag: 
          </Text>
          <Text style={styles.bankCc}>
            Cc: 
          </Text>
        </View>
        <TouchableOpacity
          style={styles.nextButton}
          onPress={() => {
            navigation.navigate('DataReviewScreen');
         
          }}
        >
          <Text style={styles.nextText}>Avançar</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </KeyboardAvoidingWrapper>
  );
};

export default ValueTransferScreen;
