import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: '#FAFBFE', 
    marginHorizontal: 24,   
  },
  headerImg: {
    resizeMode: 'contain',
    width: 60,
    height: 60,
  },
  logoView: {
    alignItems: 'center',
  },
  guideText: {
    color: '#000',
    fontFamily: 'boldIBM',
    fontSize: 32,
    textAlign: 'left',
  },
  buttonNext: {
    alignSelf: 'center',
    width: '100%',
    backgroundColor: '#00A896',
    paddingHorizontal: 0,
    paddingVertical: 15,
    borderRadius: 16,
    marginTop: 48,
    marginBottom: 20,
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
    justifyContent: 'center',
  },
  textBack: {
    fontSize: 18,
    fontFamily: 'boldIBM',
    color: '#000',
    textAlign: 'center',
    marginLeft: 8,
  },
  registerText: {
    fontFamily: 'ibmRegular',
    fontSize: 16,
    color: '#000000',
    fontWeight: '600',
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
  },
  secondaryGuideText: {
    fontFamily: 'ibmRegular',
    fontSize: 16,
    color: '#6C6C6C',
  },
  guideTextContainer: {
    gap: 24,
  },
  inputContainer: {
    gap: 8,
  },
  inputs: {
    gap: 48,
    marginTop: 48,
  }
});

export default styles;
