// Import React Components
import React, { useState, useContext } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView,Image, TextInput } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';
import styles from './styles';

// Import Component Keyboard Avoid Wrapper
import KeyboardAvoidingWrapper from '../../components/KeyboardWrapper';

// Import Context
import { UserContext } from '../../context/userContext';
import logo from '../../../assets/logoTop.png';

// Import API
import { createExpense } from '../../services/api';

// Interface
const AddExpenseScreen = ({ navigation }) => {
  const context = useContext(UserContext);
  const [name, onChangeName] = useState('');

  const [value, onChangeText] = useState('');
  const handleCreateExpense = async (title, amount) => {
    const expenseData = {
      reason: title,
      value: amount,
      category: ""
    };

    try {
      const result = await createExpense(context.id, expenseData);
      console.log('Despesa criada com sucesso:', result);
    } catch (error) {
      console.error('Erro ao criar despesa:', error);
    }
  };

  return (
    <KeyboardAvoidingWrapper>
      
      <SafeAreaView style={styles.container}>
        <Image style={styles.headerImg} source={logo} />
        <View
          style={styles.expenseInfoContainer}
        >
          <Text
            style={styles.expenseTitle}
          >
            Qual foi o motivo do gasto?
          </Text>
          <Text
            style={styles.expenseSubtitle}
          >
            Para ajudá-lo a organizar melhor suas finanças, pedimos que informe o motivo do gasto e o valor da despesa que você deseja registrar.
          </Text>

          <TextInput
            value={name}
            style={styles.inputValue}
            placeholder="Ex: Material Escolar"
            onChangeText={(name) => onChangeName(name)}
          />
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
            placeholder="R$ 0,00"
            onChangeText={(text) => onChangeText(text)}
          />
        </View>
       
        <TouchableOpacity
          style={styles.nextButton}
          onPress={() => {
            handleCreateExpense('titulo', 'valor');
          }}
        >
          <Text style={styles.nextText}>Avançar</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </KeyboardAvoidingWrapper>
  );
};

export default AddExpenseScreen;
