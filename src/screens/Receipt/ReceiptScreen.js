import React, { useState } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, Image, Share } from 'react-native';
import styles from './styles';
import iconExit from '../../assets/exit.png';
import RNHTMLtoPDF from 'react-native-html-to-pdf';

const ReceiptScreen = ({ navigation }) => {
  const [pdfUri, setPdfUri] = useState(null);

  const shareReceipt = async () => {
    try {
      const htmlContent = `
        <h1>Detalhes do Recibo</h1>
        <p>Valor: R$ 100,00</p>
        <p>Data: 05/06/2024</p>
        <p>Horário: 10:30</p>
        <p>ID: 123456789</p>
        <h2>Quem enviou:</h2>
        <p>Nome: Fulano de Tal</p>
        <p>CPF: 123.456.789-00</p>
        <p>Banco: Banco X</p>
        <h2>Quem recebeu:</h2>
        <p>Nome: Ciclano de Tal</p>
        <p>CPF: 987.654.321-00</p>
        <p>Banco: Banco Y</p>
      `;
  
      const pdfResult = await RNHTMLtoPDF.convert({
        html: htmlContent,
        fileName: 'receipt',
      });
  
      console.log('PDF Conversion Result:', pdfResult);
  
      if (pdfResult && pdfResult.uri) {
        const { uri } = pdfResult;
        setPdfUri(uri);
        await Share.share({ url: uri, message: 'Compartilhamento do comprovante em PDF' });
      } else {
        console.error('Erro ao converter HTML para PDF:', pdfResult);
      }
    } catch (error) {
      console.error('Erro ao compartilhar PDF:', error.message);
    }
  };
  

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
            <Text style={styles.pixValue}>R$ 100,00</Text>
          </View>
          <View style={styles.containerData}>
            <View style={styles.Title}>
              <Text style={styles.TitlepixDate}>Data</Text>
              <Text style={styles.TitleTimeSent}>Horário</Text>
              <Text style={styles.TitleIDtransation}>ID</Text>
            </View>
            <View style={styles.atributte}>
              <Text style={styles.pixDate}>05/06/2024</Text>
              <Text style={styles.TimeSent}>10:30</Text>
              <Text style={styles.IDtransation}>123456789</Text>
            </View>
          </View>
          <View style={styles.containerSent}>
            <Text style={styles.titleSent}>Quem enviou:</Text>
            <Text style={styles.nameSent}>Fulano de Tal</Text>
            <Text style={styles.cpfSent}>CPF: 123.456.789-00</Text>
            <Text style={styles.bankSent}>Banco: Banco X</Text>
          </View>
          <View style={styles.containerDestination}>
            <Text style={styles.titleDestination}>Quem recebeu:</Text>
            <Text style={styles.nameDestination}>Ciclano de Tal</Text>
            <Text style={styles.cpfDestination}>CPF: 987.654.321-00</Text>
            <Text style={styles.bankDestination}>Banco: Banco Y</Text>
          </View>
          <TouchableOpacity style={styles.receiptBtn} onPress={shareReceipt}>
        <Text style={styles.receiptText}>Compartilhar Comprovante</Text>
      </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ReceiptScreen;
