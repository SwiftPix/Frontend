import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  balance: {
    fontSize: 30,
    marginTop: 5,
    marginBottom: 20,
    borderBottomWidth: 1,
    borderEndWidth: 100,
    textAlign: 'center',
    color: '#7E7D7D',
  },
  transactions: {
    flexDirection: 'row',
  },
  pixContainer: {
    flexDirection: 'column',
    paddingTop: 5,
    paddingBottom: 10,
  },
  pixValueBox: {
    flexDirection: 'column',
    left: '-100%',
  },
  pixReciveSend: {
    color: '#7E7D7D',
    fontSize: 24,
    marginTop: 15,
    textAlign: 'center',
  },
  pixDate: {
    alignSelf: 'center',
    color: '#7E7D7D',
    fontSize: 24,
    marginTop: 20,
    textAlign: 'center',
    height: 30,
  },
  pixDateBox: {
    alignSelf: 'center',
    right: '-180%',
    top: '-5%',
  },
});
export default styles;
