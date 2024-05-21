import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FAFBFE',
  },
  headerImg: {
    resizeMode: 'contain',
    width: 80,
    height: 80,
    top: '3%',
    left: '0%',
    position: 'absolute',
  },
  guideText: {
    color: '#000',
    fontFamily: 'boldIBM',
    fontSize: 34,
    textAlign: 'left',
    top: '-10%',
  },
  description: {
    color: '#6C6C6C',
    fontFamily: 'ibmRegular',
    fontSize: 18,
    textAlign: 'left',
    top: '-5%',
  },
  subtitle: {
    color: '#000',
    fontFamily: 'boldIBM',
    fontSize: 20,
    textAlign: 'left',
    left: '-30%',
  },
  radioButtons: {
    left: '-23%',
    top: '3%',
  },
  typeDocument: {
    color: '#000',
    fontFamily: 'ibmRegular',
    fontSize: 18,
    textAlign: 'left',
    top: '2%',
  },
  buttonNext: {
    alignSelf: 'center',
    width: '85%',
    backgroundColor: '#00A896',
    paddingHorizontal: 0,
    paddingVertical: 15,
    borderRadius: 16,
    bottom: '-13%',
  },
  textNext: {
    fontSize: 20,
    fontFamily: 'boldIBM',
    color: '#fff',
    textAlign: 'center',
  },
  buttonBack: {
    flexDirection: 'row',
    bottom: '-32%',
  },
  textBack: {
    fontSize: 18,
    fontFamily: 'boldIBM',
    color: '#000',
    textAlign: 'center',
    marginLeft: 8,
  },
});

export default styles;
