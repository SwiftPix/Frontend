// Import React components
import React, { useState, useContext } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from './styles';
import logo from '../../../assets/logoTop.png';

// Import Images
import iconBRLSymb from '../../../assets/brazil-real-symbol.png';

// Import Component Keyboard Avoiding Wrapper
import KeyboardAvoidingWrapper from '../../components/KeyboardWrapper';

// Import API Back End
import { paymentsApi } from '../../services/api';

// Import Context UserContext,TransctionContext
import { UserContext } from '../../context/userContext';
import { TransctionContext } from '../../context/transactionContext';

const Description = (props) => {
  return (
    <TextInput
      {...props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
      editable
      maxLength={100}
      placeholder="Deixe um comentario"
    />
  );
};

const DataReviewScreen = ({ navigation }) => {
  const transactionContext = useContext(TransctionContext);
  const userContext = useContext(UserContext);

  // const handlePayment = () => {
  //   console.log(transactionContext.transaction);
  //   paymentsApi
  //     .post(`/payment/send`, {
  //       ...transactionContext.transaction,
  //       amount: parseFloat(transactionContext.transaction.amount),
  //     })
  //     .then((res) => {
  //       console.log(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };
  const [value, onChangeText] = useState('');
  const [shouldShow, setShouldShow] = useState(true);
  return (
    <KeyboardAvoidingWrapper>

      <SafeAreaView style={styles.container}>
      <Image style={styles.headerImg} source={logo} />
        <View style={styles.containerDestination}>
    
          <Icon name="user" size={23} color="#0A896" style={styles.iconUser} />
          <Text style={styles.destinationTitle}>Destinatário</Text>
          <View style={styles.destinationDatas}>
            <Text style={styles.nameDestination}>
            
            </Text>
            <Text style={styles.cpfDestination}>
              CPF: 
            </Text>
            <Text style={styles.bankDestination}>
              Banco
            </Text>
          </View>

          <View style={styles.editKey}>
            <Text style={styles.titleEditKey}>Chave Pix:</Text>
            <TouchableOpacity onPress={() => setShouldShow(!shouldShow)}>
              <Icon name="eye" size={24} color="#00A896" style={styles.iconHide} />
            </TouchableOpacity>
            {shouldShow ? (
              <View style={styles.dataTypeContainer}>
                <Text style={styles.typeKey}>Tipo: ******</Text>
                <Text style={styles.dataKey}>Chave: *********</Text>
              </View>
            ) : (
              <View style={styles.dataTypeContainer}>
                <Text style={styles.typeKey}>Tipo: CPF</Text>
                <Text style={styles.dataKey}>
                  Chave: 
                </Text>
              </View>
            )}
          </View>
        </View>
        <View style={styles.containerValue}>
         
          <Text style={styles.titleValue}>Valor a enviar</Text>
          <TouchableOpacity
            style={styles.editButton}
            onPress={() => navigation.navigate('ValueTransferScreen')}
          >
            <Text style={styles.textValue}>
              R$ 
            </Text>
            <Icon
              name="pencil-alt"
              size={23}
              color="#00A896"
              style={styles.iconEdit}
            />
          </TouchableOpacity>
          <View style={styles.valueContainer}>
            <Text style={styles.balanceText}>Saldo após o envio: </Text>
            <Text style={styles.balanceValue}>
              R${' '}
              
            </Text>
          </View>
        </View>
        <View style={styles.containerDescription}>
          <Text style={styles.titleDescription}>Descrição (opicional)</Text>
          <Description
            style={styles.Description}
            multiline
            numberOfLines={4}
            onChangeText={(text) => onChangeText(text)}
            value={value}
          />
        </View>
        <TouchableOpacity
          style={styles.transferButton}
          onPress={() => {
            navigation.navigate('LoadingAppScreen');
            setTimeout(() => {
              navigation.navigate('ReceiptScreen');
            }, 4000);
          }}
        >
          <Text style={styles.transferText}>Transferir</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </KeyboardAvoidingWrapper>
  );
};

export default DataReviewScreen;
