import React, { useContext, useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import styles from './styles';
import { UserContext } from '../../context/userContext';
import { balanceApi } from '../../services/api';

const documentImg = require('../../../assets/document.png');

const StatementScreen = () => {
  const userContext = useContext(UserContext);
  const weekday = [
    'Domingo',
    'Segunda-feira',
    'Terca-feira',
    'Quarta-feira',
    'Quinta-feira',
    'Sexta-feira',
    'Sabado',
  ];
  const [transactions, setTransactions] = useState([]);
  useEffect(() => {
    balanceApi
      .get(`/transactions/latest/${userContext.id}`)
      .then((res) => {
        setTransactions(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  return (
    <View style={styles.container}>
      <View style={styles.containerbalence}>
        <Text style={styles.balenText}>Saldo disponível:</Text>
        <Text style={styles.balenValue}>
          R$ {userContext.balance.toFixed(2)}
        </Text>
      </View>
      <View
        style={{
          maxHeight: '100%',
          width: '100%',
          margin: 0,
        }}
      >
        <Text style={styles.moth}>Outubro</Text>
        <ScrollView contentContainerStyle={styles.transactionsScroll}>
          {transactions.map((transaction) => {
            return (
              <>
                <View style={styles.dayTransaction}>
                  <Text style={styles.mothDayDesc}>
                    {weekday[new Date(transaction.date).getDay()]} ,{' '}
                    {new Date(transaction.date).toLocaleDateString()}
                  </Text>
                  <Text style={styles.mothDayValue}>
                    Horario: {new Date(transaction.date).toLocaleTimeString()}
                  </Text>
                </View>
                <TouchableOpacity style={styles.transactions}>
                  <Text style={styles.pixReciveSend}>
                    Pix
                    {transaction.from.id === userContext.id
                      ? ' Enviado'
                      : ' Recebido'}
                  </Text>
                  <Text style={styles.pixValue}>
                    Valor: R$ {transaction.amount}{' '}
                  </Text>
                  <Text style={styles.pixDestination}>
                    {transaction.from.id === userContext.id
                      ? `Para: ${transaction.to.name}`
                      : `De: ${transaction.from.name}`}
                  </Text>
                  <Image style={styles.documentImg} source={documentImg} />
                </TouchableOpacity>
              </>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
};

export default StatementScreen;
