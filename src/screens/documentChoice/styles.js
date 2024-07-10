import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFBFE', 
    marginHorizontal: 24,   
  },
  headerImg: {
    resizeMode: 'contain',
    width: 60,
    height: 60,
  },
  logoView: {
    alignItems: 'center',
    marginVertical: 20,
  },
  formView: {
    marginTop: 20,
  },
  buttonNext: {
    alignSelf: 'center',
    width: '100%',
    backgroundColor: '#00A896',
    paddingHorizontal: 0,
    paddingVertical: 15,
    borderRadius: 16,
    marginTop: 20,
    marginBottom: 20,
  },
  buttonNextDisabled: {
    alignSelf: 'center',
    width: '100%',
    backgroundColor: '#B0BEC5',
    paddingHorizontal: 0,
    paddingVertical: 15,
    borderRadius: 16,
    marginTop: 20,
    marginBottom: 20,
  },
  textNext: {
    fontSize: 20,
    fontFamily: 'boldIBM',
    color: '#fff',
    textAlign: 'center',
  },
  input: {
    height: 52,
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: '#f4f4f4',
    borderColor: '#DEDEDE',
    paddingLeft: 15,
    color: '#000000',
    fontSize: 16,
    fontFamily: 'ibmRegular',
    marginBottom: 15,
  },
});

export default styles;
