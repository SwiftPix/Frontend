// Import React Components
import React, { useState, useEffect, useContext } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import styles from './styles';

// Import APIs Back End
import { UserContext } from '../../context/userContext';

// Interface
const ExpensesScreen = ({ navigation }) => {
  const context = useContext(UserContext);
  const [transactions, setTransactions] = useState('');
  const isFocused = useIsFocused();

  // useEffect(() => {
  //   balanceApi
  //     .get(`/${context.id}`)
  //     .then((res) => {
  //       setBalance(res.data.BALANCECUSTOMER);
  //       context.setBalance(res.data.BALANCECUSTOMER);
  //       console.log(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  //   balanceApi
  //     .get(`/transactions/latest/${context.id}`)
  //     .then((res) => {
  //       setTransactions(res.data);
  //       console.log(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, [isFocused]);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.body}>
        <View style={styles.list}>
          <View style={styles.balanceTitle}>
            <Text style={styles.textBalance}>Saldo de despesas</Text>
          </View>
            <>
              <Text style={styles.balance}>R$ 20,00</Text>
              <View
                style={{
                  maxHeight: '50%',
                  width: '90%',
                  margin: 15,
                }}
              >
                <ScrollView contentContainerStyle={styles.transactionsScroll}>
                  {/* {transactions.map((transaction) => {
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
                  })} */}
                </ScrollView>
              </View>
            </>
          {/* <TouchableOpacity
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
          </TouchableOpacity> */}
        </View>
        <View style={styles.buttons}>
          <TouchableOpacity
            style={styles.pixBtn}
            onPress={() => navigation.navigate('AddExpenseScreen')}
          >
            <Text style={styles.pixText}>Adicionar despesa</Text>
          </TouchableOpacity>
          <View style={styles.btnContainer}>
            <View style={styles.btnRows}>
              {/* <TouchableOpacity style={styles.btnKeys}>
                <Image style={styles.logo} source={iconKey} />
                <Text style={styles.textKeys}>Minhas chaves</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.btnRows}>
              <TouchableOpacity style={styles.btnKeys}>
                <Image style={styles.logo} source={iconCrow} />
                <Text style={styles.textKeys}>Meus favoritos</Text>
              </TouchableOpacity> */}
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ExpensesScreen;
