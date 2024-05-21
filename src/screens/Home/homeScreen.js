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
import iconKey from '../../../assets/key.png';
import iconCrow from '../../../assets/crown.png';

// Interface
const HomeScreen = ({ navigation }) => {
  const context = useContext(UserContext);
  const [balance, setBalance] = useState('');
  const [transactions, setTransactions] = useState('');
  const isFocused = useIsFocused();

  useEffect(() => {
    balanceApi
      .get(`/${context.id}`)
      .then((res) => {
        setBalance(res.data.BALANCECUSTOMER);
        context.setBalance(res.data.BALANCECUSTOMER);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    balanceApi
      .get(`/transactions/latest/${context.id}`)
      .then((res) => {
        setTransactions(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [isFocused]);
  const [shouldShow, setShouldShow] = useState(true);
  const functionA = () => {
    setShouldShow(!shouldShow);
  };
  const functionB = () => {
    return <Icon name="eye" size={25} color="#000" style={styles.iconHide} />;
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerImages}>
          <TouchableOpacity>
            <Image style={styles.iconHeader} source={iconNotification} />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image style={styles.iconHeader} source={iconSettings} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image style={styles.iconHeader} source={iconUser} />
          </TouchableOpacity>
        </View>
        <Text style={styles.headerText}>Olá, usuário {context.id}</Text>
      </View>
      <View style={styles.body}>
        <View style={styles.list}>
          <View style={styles.balanceTitle}>
            <Text style={styles.textBalance}>Saldo disponível</Text>
            <TouchableOpacity
              onPress={() => {
                functionA();
                functionB();
                <Icon
                  name="eye"
                  size={25}
                  color="#000"
                  style={styles.iconHide}
                />;
              }}
            >
              <Icon
                name="eye-slash"
                size={25}
                color="#000"
                style={styles.iconHide}
              />
            </TouchableOpacity>
          </View>
          {shouldShow ? (
            <HideContent />
          ) : (
            <>
              <Text style={styles.balance}>R$ {balance.toFixed(2)}</Text>
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

          <TouchableOpacity
            onPress={() => navigation.navigate('StatementScreen')}
            style={styles.statementButton}
          >
            <Text style={styles.statementText}>Ver Extrato</Text>
            <Icon
              name="chevron-right"
              size={25}
              color="#414141"
              style={styles.iconNext}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.buttons}>
          <TouchableOpacity
            style={styles.pixBtn}
            onPress={() => navigation.navigate('SelectKeyScreen')}
          >
            <Image style={styles.pixLogo} source={iconPix} />
            <Text style={styles.pixText}>Pagar por Pix</Text>
          </TouchableOpacity>
          <View style={styles.btnContainer}>
            <View style={styles.btnRows}>
              <TouchableOpacity style={styles.btnKeys}>
                <Image style={styles.logo} source={iconKey} />
                <Text style={styles.textKeys}>Minhas chaves</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.btnRows}>
              <TouchableOpacity style={styles.btnKeys}>
                <Image style={styles.logo} source={iconCrow} />
                <Text style={styles.textKeys}>Meus favoritos</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;