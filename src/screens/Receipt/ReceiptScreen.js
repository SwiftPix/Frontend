// Import React Components
import React, { useContext } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from 'react-native';
import styles from './styles';

// Import Context
import { TransctionContext } from '../../context/transactionContext';

// Import Images
import iconExit from '../../assets/exit.png';

// Interface
const ReceiptScreen = ({ navigation }) => {
  // const transactionContext = useContext(TransctionContext);
  // console.log(transactionContext.transaction);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.exitButton}
          onPress={() => navigation.navigate('HomeScreen')}
        >
          <Image source={iconExit} style={styles.iconExit} />
        </TouchableOpacity>
        <Text style={styles.titleHeader}>Pix Enviado!</Text>
      </View>
      <View style={styles.frame}>
        <View style={styles.frame2}>
          <View style={styles.containerbalence}>
            <Text style={styles.pixValue}>
              R$ 
            </Text>
          </View>
          <View style={styles.containerData}>
            <View style={styles.Title}>
              <Text style={styles.TitlepixDate}>Data</Text>
              <Text style={styles.TitleTimeSent}>Horário</Text>
              <Text style={styles.TitleIDtransation}>ID</Text>
            </View>

            <View style={styles.atributte}>
              <Text style={styles.pixDate}>
              Date
              </Text>
              <Text style={styles.TimeSent}>
             Time
              </Text>
              <Text style={styles.IDtransation}>
              id
              </Text>
            </View>
          </View>
          <View style={styles.containerSent}>
            <Text style={styles.titleSent}>Quem enviou:</Text>
            <Text style={styles.nameSent}>
            name
            </Text>
            <Text style={styles.cpfSent}>
              CPF: 
            </Text>
            <Text style={styles.bankSent}>
              Banco 
            </Text>
          </View>
          <View style={styles.containerDestination}>
            <Text style={styles.titleDestination}>Quem recebeu:</Text>
            <Text style={styles.nameDestination}>
         name
            </Text>
            <Text style={styles.cpfDestination}>
              CPF: 
            </Text>
            <Text style={styles.bankDestination}>
              Banco 
            </Text>
          </View>
          <TouchableOpacity style={styles.receiptBtn}>
            <Text style={styles.receiptText}>Compartilhar Comprovante</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ReceiptScreen;
