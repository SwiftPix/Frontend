import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  Alert,
  Modal,
} from 'react-native';
import { useRoute } from '@react-navigation/native';
import { TextInputMask } from 'react-native-masked-text';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Accordion from 'react-native-accordion-wrapper';
import CountryPicker from 'react-native-country-picker-modal';
import * as Location from 'expo-location';
import logo from '../../../assets/logoTop.png';
import { Calendar } from 'react-native-calendars';

// Import Styles
import styles from './styles';

// Import Component Keyboard Avoiding Wrapper
import KeyboardAvoidingWrapper from '../../components/KeyboardWrapper';

// Import API Back End
import { getUserByKey, createTransference, getCurrency } from '../../services/api';

const SelectKeyScreen = ({ navigation }) => {
  const [cpf, setCpf] = useState('');
  const [cell, setCell] = useState('');
  const [email, setEmail] = useState('');
  const [aleatoria, setAleatoria] = useState('');
  const [value, setValue] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('BR');
  const [currency, setCurrency] = useState(null);
  const [loadingCurrency, setLoadingCurrency] = useState(true);
  const [scheduledDate, setScheduledDate] = useState(null);
  const [isCalendarVisible, setIsCalendarVisible] = useState(false);
  const route = useRoute();
  const { userId, country_iso_2 } = route.params;

  useEffect(() => {
    const fetchCurrency = async () => {
      try {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          Alert.alert('Permissão de localização negada');
          setLoadingCurrency(false);
          return;
        }

        let location = await Location.getCurrentPositionAsync({});
        const { latitude, longitude } = location.coords;
        
        const currencyResponse = await getCurrency(latitude, longitude);
        setCurrency(currencyResponse);
      } catch (error) {
        console.error('Erro ao obter moeda:', error);
        Alert.alert('Erro', 'Não foi possível obter a moeda.');
      } finally {
        setLoadingCurrency(false);
      }
    };

    fetchCurrency();
  }, []);

  useEffect(() => {
    if (!userId) {
      console.error('userId não foi passado corretamente.');
      Alert.alert('Erro', 'userId não foi fornecido.');
    } else {
      console.log('userId recebido:', userId);
    }
  }, [userId]);

  const handleTransference = async () => {
    const key = cpf || cell || email || aleatoria;
  
    if (!key || !value || !userId || !currency) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      return;
    }
  
    const parsedValue = parseFloat(value).toFixed(1);
  
    const transferenceData = {
      sender_id: userId,
      receiver_key: key,
      currency: currency,
      value: parsedValue,
    };
  
    try {
      console.log('Enviando dados para criar transferência:', transferenceData);
      const user_data = await getUserByKey(key);
      console.log('Chave verificada:', user_data);
  
      if (scheduledDate) {
        transferenceData.scheduled_date = scheduledDate;
      }
  
      const response = await createTransference(transferenceData);
      Alert.alert('Sucesso', 'Transferência realizada com sucesso!');
      navigation.navigate('ReceiptScreen', { transferData: response });
    } catch (error) {
      console.error('Erro ao registrar chave:', error);
      Alert.alert('Erro', 'Não foi possível registrar a chave.');
    }
  };

  const handleSchedulePix = () => {
    setIsCalendarVisible(true);
  };

  const handleDayPress = (day) => {
    setScheduledDate(day.dateString);
    setIsCalendarVisible(false);
    Alert.alert('PIX Agendado', `PIX agendado para ${day.dateString}`);
    navigation.navigate('HomeScreen', { userId}); 
  };

  if (loadingCurrency) {
    return (
      <SafeAreaView style={styles.loadingContainer}>
        <Text>Carregando moeda...</Text>
      </SafeAreaView>
    );
  }

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
                      onChangeText={(text) => setCpf(text)}
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
                      onChangeText={(text) => setCell(text)}
                    />
                  ),
                },
                {
                  title: 'E-mail',
                  child: (
                    <TextInput
                      value={email}
                      placeholder="E-mail"
                      style={styles.input}
                      onChangeText={(text) => setEmail(text)}
                    />
                  ),
                },
                {
                  title: 'Aleatória',
                  child: (
                    <TextInput
                      value={aleatoria}
                      placeholder="Aleatória"
                      style={styles.input}
                      onChangeText={(text) => setAleatoria(text)}
                    />
                  ),
                },
              ]}
            />
          </View>
          <CountryPicker
            containerButtonStyle={styles.selectCountry}
            translation="por"
            countryCodes={{country_iso_2}}
            onSelect={(country) => setSelectedCountry(country.cca2)}
            countryCode={selectedCountry} 
            withCountryNameButton
            modalProps={{ visible: false }}
          />
          <View style={styles.valueContainer}>
            <Text style={styles.valueLabel}>Valor:</Text>
            <TextInput
              value={value}
              placeholder="Valor"
              keyboardType="numeric"
              style={styles.input}
              onChangeText={(text) => setValue(text)}
            />
          </View>
          <TouchableOpacity
            onPress={handleSchedulePix}
            style={styles.scheduleButton}
          >
            <Text style={styles.scheduleText}>Agendar PIX para outro dia</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={handleTransference}
          style={styles.doneButton}
        >
          <Text style={styles.nextText}>Avançar</Text>
        </TouchableOpacity>

        {/* Modal do Calendário */}
        <Modal
          animationType="slide"
          visible={isCalendarVisible}
          onRequestClose={() => setIsCalendarVisible(false)}
        >
          <View style={styles.calendarModal}>
            <Calendar
              onDayPress={handleDayPress}
              markedDates={scheduledDate ? { [scheduledDate]: { selected: true } } : {}}
            />
          </View>
        </Modal>
      </SafeAreaView>
    </KeyboardAvoidingWrapper>
  );
};

export default SelectKeyScreen;
