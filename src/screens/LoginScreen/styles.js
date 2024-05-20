import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#f4f4f4',
  },
  logo: {
    top: '-5%',
    width: 180,
    alignSelf: 'center',
    resizeMode: 'contain',
    flex: 0.5,
  },
  loginBox: {
    top: '-20%',
    backgroundColor: '#f4f4f4',
    padding: 15,
    flex: 0.7,
    height: '100%',
    width: '85%',
    borderRadius: 10,
    justifyContent: 'space-around',
  },
  helloContent: {
    flexDirection: 'column',
    marginTop: 10,
    marginBottom: 20,
  },
  helloText: {
    fontFamily: 'ibmRegular',
    color: '#002D9C',
    fontSize: 28,
    textAlign: 'left',
  },
  againText: {
    fontFamily: 'ibmRegular',
    color: '#002D9C',
    fontSize: 28,
    textAlign: 'left',
  },
  loginText: {
    fontFamily: 'boldIBM',
    fontSize: 20,
    color: '#002D9C',
    marginTop: 20,
    marginBottom: 15,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderRadius: 13,
    backgroundColor: '#DCE9FF',
    borderColor: '#DCE9FF',
    marginVertical: 15,
    paddingLeft: 15,
    color: '#002D9C',
    fontSize: 18,
    fontFamily: 'ibmRegular',
  },
  forgotPassword: {
    fontFamily: 'ibmRegular',
    marginTop: 15,
    marginBottom: 30,
    color: '#002D9C',
    fontSize: 16,
  },
  btnLogin: {
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#0F62FE',
    width: '95%',
    alignSelf: 'center',
    alignItems: 'center',
  },
  btnText: {
    fontFamily: 'boldIBM',
    fontSize: 20,
    color: '#fff',
  },
  registerBtn: {
    bottom: '15%',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  accountText: {
    color: '#002D9C',
    fontSize: 16,
    fontFamily: 'ibmRegular',
  },
  registerText: {
    marginBottom: '-3%',
    textDecorationLine: 'underline',
    color: '#002D9C',
    fontSize: 16,
    fontFamily: 'ibmRegular',
  },
});
export default styles;
