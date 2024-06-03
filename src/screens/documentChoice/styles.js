import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFBFE',
    
  },
  headerImg: {
    resizeMode: 'contain',
    width: 60,
    height: 60,
    top: '5%',
    left: '43%',
    position: 'absolute',
  },
  guideText: {
    color: '#000',
    fontFamily: 'boldIBM',
    fontSize: 20,
    textAlign: 'center',
    top: '6%',
    marginBottom: 15,
  },
  buttonNext: {
    alignSelf: 'center',
    width: '85%',
    backgroundColor: '#00A896',
    paddingHorizontal: 0,
    paddingVertical: 15,
    borderRadius: 16,
    bottom: '-5%',
  },
  textNext: {
    fontSize: 20,
    fontFamily: 'boldIBM',
    color: '#fff',
    textAlign: 'center',
  },
  buttonBack: {
    flexDirection: 'row',
    bottom: '-15%',
    marginLeft: '40%',
  },
  textBack: {
    fontSize: 18,
    fontFamily: 'boldIBM',
    color: '#000',
    textAlign: 'center',
    marginLeft: 8,
  },
  registerText: {
    fontFamily: 'boldIBM',
    fontSize: 20,
    color: '#000000',
    marginTop: 50,
    marginBottom: 2,
    marginLeft: 35,
  },
  input: {
    height: 40,
    width: '80%',
    borderWidth: 1,
    borderRadius: 13,
    backgroundColor: '#ffffff',
    borderColor: '#00A896',
    marginLeft: 35,
    color: '#000000',
    fontSize: 18,
    fontFamily: 'ibmRegular',
  },
});

export default styles;
