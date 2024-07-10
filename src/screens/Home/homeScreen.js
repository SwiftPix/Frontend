// Import React Components
import React, { useState, useEffect, useContext } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useIsFocused } from '@react-navigation/native';
import styles from './styles';

// Import Component Hide Content
import HideContent from '../../components/HomeScreenHideContent/HideContent';

// Import APIs Back End
import { balanceApi } from '../../services/api';
import { UserContext } from '../../context/userContext';

// Import Images
import iconNotification from '../../../assets/notification.png';
import iconSettings from '../../../assets/settings.png';
import iconUser from '../../../assets/user.png';
import iconPix from '../../../assets/pix.png';

// Interface
const HomeScreen = ({ navigation }) => {
  const context = useContext(UserContext);
  const [balance, setBalance] = useState('');
  const [transactions, setTransactions] = useState([]);
  const isFocused = useIsFocused();
  const [shouldShow, setShouldShow] = useState(true);

  const toggleContentVisibility = () => {
    setShouldShow(!shouldShow);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerImagesContainer}>
          <TouchableOpacity>
            <Image style={styles.iconHeader} source={iconUser} testID='UserIcon' />
          </TouchableOpacity>
          <View style={styles.headerImages}>
            <TouchableOpacity onPress={toggleContentVisibility}>
              <Icon
                name={shouldShow ? "eye-slash" : "eye"}
                size={20}
                color='#fff'
                style={styles.iconHeader}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image style={styles.iconHeader} source={iconNotification} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image style={styles.iconHeader} source={iconSettings} />
            </TouchableOpacity>
          </View>
        </View>
        <Text style={styles.headerText}>Olá, usuário!</Text>
      </View>
      <View style={styles.body}>
        <View style={styles.list}>
          <View style={styles.balanceTitle}>
            <Text style={styles.textBalance}>Saldo disponível</Text>
          </View>
          {shouldShow ? (
            <HideContent />
          ) : (
            <>
              <Text style={styles.balance}>R$ {parseFloat(balance).toFixed(2)}</Text>
              <View
                style={{
                  maxHeight: '50%',
                  width: '90%',
                  margin: 15,
                }}
              >
                <ScrollView contentContainerStyle={styles.transactionsScroll}>
                  {transactions.map((transaction) => {
                    return (
                      <TouchableOpacity
                        style={styles.transactions}
                        key={transaction.endToEndId}
                      >
                        <View style={styles.pixContainer}>
                          <View style={styles.pixValueBox}>
                            <Text style={styles.pixReciveSend}>
                              {transaction.from.id === context.id
                                ? 'Enviado'
                                : 'Recebido'}{' '}
                            </Text>
                            <Text style={styles.pixValue}>
                              R$ {transaction.amount}
                            </Text>
                          </View>
                        </View>
                        <View style={styles.pixDateBox}>
                          <Text style={styles.pixDate}>
                            {new Date(transaction.date).toLocaleDateString()}
                          </Text>
                        </View>
                      </TouchableOpacity>
                    );
                  })}
                </ScrollView>
              </View>
            </>
          )}
        </View>
        <View style={styles.buttons}>
          <TouchableOpacity
            style={styles.pixBtn}
            onPress={() => navigation.navigate('SelectKeyScreen')}
          >
            <Image style={styles.pixLogo} source={iconPix} />
            <Text style={styles.pixText}>Transferir por Pix</Text>
          </TouchableOpacity>
          <View style={styles.btnContainer}>
            <View style={styles.btnRows}></View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
