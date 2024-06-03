import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f4f4f4',
    paddingTop: 30,
  },
  selectTitle: {
    fontSize: 25,
    fontFamily: 'boldIBM',
    alignSelf: 'center',
    marginTop: '25%',
  },
  accordion: {
    marginTop: '25%',
  },
  keyText: {
    fontSize: 20,
    fontFamily: 'boldIBM',
    alignSelf: 'center',
  },
  input: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    width: '85%',
    height: '30%',
    bottom: '-10%',
    fontSize: 20,
    fontFamily: 'boldIBM',
    alignSelf: 'center',
    paddingLeft: 15,
    marginTop: '2%',
  },
  qrcodeContainer: {
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: '10%',
    backgroundColor: '#00A896',
    width: 144,
    height: 125,
    resizeMode: 'contain',
    borderRadius: 10,
    padding: 20,
    paddingLeft: 30,
    paddingRight: 30,
    bottom: '30%',
    position: 'absolute',
  },
  qrcode: {
    width: 62,
    height: 62,
    resizeMode: 'contain',
    margin: 5,
  },
  qrcodeText: {
    marginTop: 5,
    fontSize: 20,
    fontFamily: 'boldIBM',
    color: '#fff',
  },
  nextButton: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: '10%',
    right: '5%',
  },
  nextText: {
    fontSize: 20,
    fontFamily: 'boldIBM',
    color: '#fff',
    textAlign: 'center',
  
  },
  doneButton: {
    alignSelf: 'center',
    width: '85%',
    backgroundColor: '#00A896',
    paddingHorizontal: 0,
    paddingVertical: 15,
    borderRadius: 16,
    bottom: '-13%',
  },

  headerImg: {
    resizeMode: 'contain',
    width: 60,
    height: 60,
    top: '5%',
    left: '43%',
    position: 'absolute',
  },
});
export default styles;
