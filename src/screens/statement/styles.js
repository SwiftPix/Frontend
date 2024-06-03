import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F4F4F4',
    paddingTop: '10%',
  },
  containerbalence: {
    backgroundColor: '#fff',
    width: '70%',
    height: '15%',
    borderRadius: 10,
    shadowColor: '#000',
    elevation: 5,
  },
  balenText: {
    textAlign: 'center',
    fontFamily: 'boldIBM',
    fontSize: 20,
    padding: 10,
    color: '#002D9C',
  },
  balenValue: {
    textAlign: 'center',
    fontFamily: 'ibmRegular',
    fontSize: 26,
  },
  moth: {
    alignSelf: 'baseline',
    paddingTop: '15%',
    paddingLeft: '5%',
    fontFamily: 'boldIBM',
    fontSize: 18,
    color: '#002D9C',
  },
  dayTransaction: {
    marginTop: '3%',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#002D9C',
    width: '90%',
    maxWidth: '95%',
    justifyContent: 'space-between',
  },
  mothDayDesc: {
    fontFamily: 'boldIBM',
    fontSize: 14,
    color: '#002D9C',
    textAlign: 'auto',
  },
  mothDayValue: {
    fontFamily: 'boldIBM',
    fontSize: 14,
    color: '#002D9C',
  },
  transactionsScroll: {
    alignItems: 'center',
  },
  transactions: {
    marginTop: '1%',
    marginBottom: '1%',
    width: '90%',
    height: 95,
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    elevation: 5,
  },
  pixReciveSend: {
    fontFamily: 'boldIBM',
    fontSize: 14,
    color: '#000',
    padding: 5,
  },
  pixValue: {
    padding: 5,
    fontSize: 14,
    color: '#000',
  },
  pixDestination: {
    padding: 5,
    fontSize: 14,
    color: '#000',
  },
  documentImg: {
    top: 30,
    right: 10,
    display: 'flex',
    marginRight: 10,
    position: 'absolute',
  },
});
export default styles;
