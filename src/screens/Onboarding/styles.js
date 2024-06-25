import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFBFE',
  },
  logoTop: {
    width: 60,
    height: 60,
    alignSelf: 'center',
    resizeMode: 'contain',
    top: '2%',
  },
  welcomeImgs: {
    height: 360,
    width: 379,
    resizeMode: 'contain',
  },
  title: {
    color: '#000',
    fontFamily: 'boldIBM',
    fontSize: 32,
  },
  subtitle: {
    color: '#6C6C6C',
    fontFamily: 'ibmRegular',
    fontSize: 16,
    paddingLeft: 10,
    paddingRight: 10,
    textAlign: 'center',
  },
  buttons: {
    justifyContent: 'center',
  },
  buttonRegis: {
    alignSelf: 'center',
    width: '85%',
    backgroundColor: '#00A896',
    paddingHorizontal: 0,
    paddingVertical: 15,
    borderRadius: 16,
  },
  textRegis: {
    fontSize: 20,
    fontFamily: 'boldIBM',
    color: '#fff',
    textAlign: 'center',
  },
  buttonLogin: {
    padding: 24,
  },
  textLogin: {
    fontSize: 18,
    fontFamily: 'boldIBM',
    color: '#000',
    textAlign: 'center',
  },
});

export default styles;
