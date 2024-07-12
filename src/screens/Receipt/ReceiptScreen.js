import React from 'react';
import { View, Text, TouchableOpacity, Share, Alert, ScrollView } from 'react-native';
import RNHTMLtoPDF from 'react-native-html-to-pdf';
import styles from './styles'; 

const ReceiptScreen = ({ route, navigation }) => {
  const { transferData } = route.params;

  const generateHTML = () => {
    return `
      <html>
        <body>
          <h1>Comprovante de  Transferência</h1>
          <p><strong>ID:</strong> ${transferData._id}</p>
          <p><strong>Moeda:</strong> ${transferData.currency}</p>
          <p><strong>Data:</strong> ${new Date(transferData.date).toLocaleString()}</p>
          <h2>De</h2>
          <p><strong>Nome:</strong> ${transferData.from.name}</p>
          <p><strong>CPF:</strong> ${transferData.from.cpf}</p>
          <p><strong>Agência:</strong> ${transferData.from.agency}</p>
          <p><strong>Conta:</strong> ${transferData.from.account}</p>
          <h2>Para</h2>
          <p><strong>Nome:</strong> ${transferData.to.name}</p>
          <p><strong>CPF:</strong> ${transferData.to.cpf}</p>
          <p><strong>Agência:</strong> ${transferData.to.agency}</p>
          <p><strong>Conta:</strong> ${transferData.to.account}</p>
          <p><strong>Valor:</strong> ${transferData.value}</p>
        </body>
      </html>
    `;
  };

  const createPDF = async () => {
    try {
      const options = {
        html: generateHTML(),
        fileName: 'receipt',
        directory: 'Documents',
      };

      const file = await RNHTMLtoPDF.convert(options);
      Alert.alert('Sucesso', 'PDF gerado com sucesso', [
        {
          text: 'Compartilhar',
          onPress: () => {
            Share.share({
              url: file.filePath,
              title: 'Compartilhar Recibo',
            });
          },
        },
      ]);
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível gerar o PDF');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Comprovante de Transferência</Text>
      <Text><Text style={styles.label}>ID:</Text> {transferData._id}</Text>
      <Text><Text style={styles.label}>Moeda:</Text> {transferData.currency}</Text>
      <Text><Text style={styles.label}>Data:</Text> {new Date(transferData.date).toLocaleString()}</Text>
      <Text style={styles.sectionTitle}>De</Text>
      <Text><Text style={styles.label}>Nome:</Text> {transferData.from.name}</Text>
      <Text><Text style={styles.label}>CPF:</Text> {transferData.from.cpf}</Text>
      <Text><Text style={styles.label}>Agência:</Text> {transferData.from.agency}</Text>
      <Text><Text style={styles.label}>Conta:</Text> {transferData.from.account}</Text>
      <Text style={styles.sectionTitle}>Para</Text>
      <Text><Text style={styles.label}>Nome:</Text> {transferData.to.name}</Text>
      <Text><Text style={styles.label}>CPF:</Text> {transferData.to.cpf}</Text>
      <Text><Text style={styles.label}>Agência:</Text> {transferData.to.agency}</Text>
      <Text><Text style={styles.label}>Conta:</Text> {transferData.to.account}</Text>
      <Text><Text style={styles.label}>Valor:</Text> {transferData.value}</Text>
      <TouchableOpacity onPress={createPDF} style={styles.button}>
        <Text style={styles.buttonText}>Compartilhar como PDF</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default ReceiptScreen;
