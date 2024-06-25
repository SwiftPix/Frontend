const DocChoiceScreen = ({ navigation }) => {
  const [isModalVisible, setisModalVisible] = useState(false);
  const [chooseData, setChooseData] = useState();
  const [cpf, onChangeText] = useState('');
  const [celphone, onChangePhone] = useState('');
  const [name, onChangeName] = useState('');
  const [password, onChangePassword] = useState('');
  const [confirmPassword, onChangeConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const changeModalVisible = (bool) => {
    setisModalVisible(bool);
  };
  const setData = (data) => {
    setChooseData(data);
  };

  const handleCreateAccount = async () => {
    if (password !== confirmPassword) {
      Alert.alert('Erro', 'As senhas não coincidem');
      return;
    }

    const userData = {
      name,
      cpf,
      cellphone: celphone,
      password
    };

    setLoading(true);

    try {
      const response = await createUser(userData);
      setLoading(false); // Finaliza o carregamento
      Alert.alert('Sucesso', 'Conta criada com sucesso');
      navigation.navigate('BiometricScreen');
    } catch (error) {
      setLoading(false);
      Alert.alert('Erro', error.message || 'Ocorreu um erro ao criar a conta');
    }
  };

  if (loading) {
    return <LoadingAppScreen />; 
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <SafeAreaView style={styles.container}>
          <View style={styles.logoView}>
            <Image style={styles.headerImg} source={logo} />
          </View>
          <View style={styles.guideTextContainer}>
            <Text style={styles.guideText}>
              Vamos criar uma conta no SwiftPix!
            </Text>
            <Text style={styles.secondaryGuideText}>
              Insira seu CPF para começar. Ele será usado como sua principal identificação no SwiftPix.
            </Text>
          </View>
          <View style={styles.inputs}>
            <View style={styles.inputContainer}>
              <Text style={styles.registerText}>Nome:</Text>
              <TextInput
                value={name}
                style={styles.input}
                placeholder='Fulano da Silva'
                placeholderTextColor='#DEDEDE'
                onChangeText={onChangeName}
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.registerText}>CPF:</Text>
              <TextInputMask
                type="cpf"
                value={cpf}
                keyboardType="numeric"
                style={styles.input}
                onChangeText={onChangeText}
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.registerText}>Celular:</Text>
              <TextInputMask
                type="cel-phone"
                value={celphone}
                keyboardType="numeric"
                style={styles.input}
                onChangeText={onChangePhone}
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.registerText}>Senha:</Text>
              <TextInput
                value={password}
                style={styles.input}
                secureTextEntry
                onChangeText={onChangePassword}
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.registerText}>Repetir Senha:</Text>
              <TextInput
                value={confirmPassword}
                style={styles.input}
                secureTextEntry
                onChangeText={onChangeConfirmPassword}
              />
            </View>
          </View>
          <TouchableOpacity
            style={styles.buttonNext}
            onPress={handleCreateAccount}
          >
            <Text style={styles.textNext}>Avançar</Text>
          </TouchableOpacity>
          <Modal
            transparent
            animationType="fade"
            visible={isModalVisible}
            onRequestClose={() => changeModalVisible(false)}
          >
            <ModalDocumentChoice
              changeModalVisible={changeModalVisible}
              setData={setData}
            />
          </Modal>
        </SafeAreaView>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default DocChoiceScreen;
