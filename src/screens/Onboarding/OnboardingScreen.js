/* eslint-disable no-unused-vars */
// Import Reacts Componentes
import React, { useState } from 'react';
import {
  SafeAreaView,
  Text,
  Image,
  TouchableOpacity,
  View,
  Modal,
} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import styles from './styles';

// Import Components
import ModalOnboarding from '../../components/ModalOnboarding/modalOnb';

import illuWelcome from '../../../assets/onboardingImgs/illuWelcome.png';
import illuOrganization from '../../../assets/onboardingImgs/illuOrganization.png';
import illuAgility from '../../../assets/onboardingImgs/illuAgility.png';
import logoTop from '../../../assets/logoTop.png';

// Dots Config
const Dots = ({ selected }) => {
  const backgroundColor = selected ? '#000' : '#D9D9D9';
  return (
    <View
      style={{
        left: 160,
        width: 10,
        height: 10,
        marginHorizontal: 7,
        borderRadius: 10,
        bottom: '45%',
        backgroundColor,
      }}
    />
  );
};

// Interface
const OnboardingScreen = ({ navigation }) => {
  const [isModalVisible, setisModalVisible] = useState(false);
  const [chooseData, setChooseData] = useState();

  const changeModalVisible = (bool) => {
    setisModalVisible(bool);
  };
  const setData = (data) => {
    setChooseData(data);
  };
  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.logoTop} source={logoTop} />
      <Onboarding
        DotComponent={Dots}
        bottomBarHeight={0}
        bottomBarHighlight={false}
        showDone={false}
        showNext={false}
        showSkip={false}
        containerStyles={{
          top: '-20%',
        }}
        imageContainerStyles={{
          paddingBottom: 70,
        }}
        pages={[
          {
            backgroundColor: '#FAFBFE',
            image: <Image style={styles.welcomeImgs} source={illuWelcome} />,
            title: <Text style={styles.title}>Seja bem vindo(a)!</Text>,
            subtitle: (
              <Text style={styles.subtitle}>
                Pensado totalmente para você, o SwiftPix é uma alternativa simples,
                ágil e dinâmica de organizar seus gastos.
              </Text>
            ),
          },
          {
            backgroundColor: '#FAFBFE',
            image: (
              <Image style={styles.welcomeImgs} source={illuOrganization} />
            ),
            title: <Text style={styles.title}>Organização</Text>,
            subtitle: (
              <Text style={styles.subtitle}>
                Realiza operações via PIX de acordo com a moeda que desejar, reserve-as por datas
                específicas e muito mais!
              </Text>
            ),
          },
          {
            backgroundColor: '#FAFBFE',
            image: <Image style={styles.welcomeImgs} source={illuAgility} />,
            title: <Text style={styles.title}>Agilidade</Text>,
            subtitle: (
              <Text style={styles.subtitle}>
                Quem diria que transferir dinheiro por Pix seria ainda mais
                simples? Com o SwiftPix, facilitamos o processo!
              </Text>
            ),
          },
        ]}
      />
      <TouchableOpacity
        style={styles.buttonRegis}
        onPress={() => changeModalVisible(true)}
      >
        <Text style={styles.textRegis}>Começar</Text>
      </TouchableOpacity>
      <Modal
        transparent
        animationType="fade"
        visible={isModalVisible}
        onRequestClose={() => changeModalVisible(false)}
      >
        <ModalOnboarding
          changeModalVisible={changeModalVisible}
          setData={setData}
        />
      </Modal>
      <TouchableOpacity
        style={styles.buttonLogin}
        onPress={() => {
          navigation.navigate('LoadingAppScreen');
          setTimeout(() => {
            navigation.navigate('LoginScreen');
          }, 4000);
        }}
      >
        <Text style={styles.textLogin}>Já tenho conta</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default OnboardingScreen;
