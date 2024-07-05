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
import { useIsFocused } from '@react-navigation/native';
import styles from './styles';

// Import APIs Back End
import { UserContext } from '../../context/userContext';
import { getExpenses } from '../../services/api';

import logo from '../../../assets/logoTop.png';

// Interface
const ExpensesScreen = ({ navigation }) => {
  const context = useContext(UserContext);
  const [expenses, setExpenses] = useState([]);
  const isFocused = useIsFocused();

  useEffect(() => {
    const fetchExpenses = async () => {
      try {
        const result = await getExpenses(context.id);
        setExpenses(result);
        console.log('Despesas recuperadas com sucesso:', result);
      } catch (error) {
        console.error('Erro ao recuperar despesas:', error);
      }
    };

    if (isFocused) {
      fetchExpenses();
    }
  }, [isFocused]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.body}>
        <Image style={styles.headerImg} source={logo} />
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
                  {expenses.map((expense) => {
                    return (
                      <TouchableOpacity
                        style={styles.transactions}
                        key={expense.id}
                      >
                        <View style={styles.pixContainer}>
                          <View style={styles.pixValueBox}>
                            <Text style={styles.pixReciveSend}>
                              {expense.from.id === context.id
                                ? 'Enviado'
                                : 'Recebido'}{' '}
                            </Text>
                            <Text style={styles.pixValue}>
                              R$ {transaction.value}
                            </Text>
                          </View>
                        </View>
                      </TouchableOpacity>
                    );
                  })}
                </ScrollView>
              </View>
            </>
        </View>
        <View style={styles.buttons}>
          <TouchableOpacity
            style={styles.pixBtn}
            onPress={() => navigation.navigate('AddExpenseScreen')}
          >
            <Text style={styles.pixText}>Adicionar despesa</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ExpensesScreen;
