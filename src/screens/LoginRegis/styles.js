import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F4F4F4',
  },
  logo: {
    marginTop: '25%',
    top: '-10%',
    width: 275,
    height: 275,
    resizeMode: 'contain',
  },
  desc: {
    color: '#002D9C',
    fontFamily: 'boldIBM',
    fontSize: 24,
    top: '-19%',
  },
  btnRegis: {
    top: '-25%',
    flexDirection: 'row',
    width: '60%',
    height: 50,
    backgroundColor: '#00A896',
    borderRadius: 10,
    marginBottom: 15,
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
  },
  regisText: {
    color: '#fff',
    fontFamily: 'boldIBM',
    fontSize: 18,
  },
  btnLogin: {
    top: '-10%',
    width: '60%',
    borderWidth: 2,
    borderColor: '#00A896 ',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
  },
  loginText: {
    color: 'rgba(0, 168, 150, 0.25)',
    fontFamily: 'boldIBM',
    fontSize: 18,
    margin: 8,
  },
});
export default styles;
