import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily: 'ibmRegular',
    backgroundColor: '#fff',
    paddingTop: '15%',
    justifyContent: 'space-between',
  },
  header: {
    flexDirection: 'column',
    backgroundColor: '#00A89657',
    gap: 32,
    minHeight: '18%',
  },
  headerImagesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 24,
    marginTop: 24,
  },
  headerText: {
    color: '#FFF',
    fontSize: 24,
    marginHorizontal: 24,
    marginBottom: 24,
    fontFamily: 'mediumIBM',
  },
  headerImages: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  iconHeader: {
    margin: 10,
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  list: {
    marginTop: '12%',
    flexDirection: 'column',
    width: '85%',
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    borderBottomWidth: 2,
    borderColor: 'rgba(0,0,0, 0.1)'
  },
  balanceTitle: {
    width: '100%',
    flexDirection: 'row',
  },
  textBalance: {
    marginTop: 10,
    textAlign: 'left',
    fontFamily: 'mediumIBM',
    fontSize: 24,
  },
  balance: {
    fontFamily: 'boldIBM',
    fontSize: 32,
    marginTop: 15,
    marginBottom: 5,
    textAlign: 'center',
  },
  transactions: {
    flexDirection: 'row',
    maxWidth: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  pixContainer: {
    flexDirection: 'column',
    marginTop: 5,
    marginBottom: 5,
  },
  pixValueBox: {
    flexDirection: 'column',
  },
  pixReciveSend: {
    fontFamily: 'ibmRegular',
    fontSize: 16,
    marginTop: 5,
    textAlign: 'left',
  },
  pixValue: {
    fontFamily: 'ibmRegular',
    fontSize: 16,
    textAlign: 'center',
    marginRight: 5,
  },
  pixDate: {
    fontFamily: 'ibmRegular',
    fontSize: 16,
    height: 25,
  },
  pixDateBox: {
    alignSelf: 'center',
    height: 25,
    right: '5%',
  },
  btnKeys: {
    borderRadius: 100,
    padding: 10,
    marginBottom: 5,
    backgroundColor: '#00A896',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    width: 60,

  },
  body: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFF',
    fontFamily: 'ibmRegular',
  },
  pixBtn: {
    borderRadius: 10,
    marginBottom: 10,
    alignSelf: 'center',
    flexDirection: 'row',
    backgroundColor: '#00A896',
    justifyContent: 'center',
    gap: 16,
    alignItems: 'center',
    width: '100%',
    height: 56,
  },
  btnContainer: {
    flexDirection: 'row',
  },
  btnRows: {
    flexDirection: 'column',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 3,
    marginHorizontal: 25,
  },
  textKeys: {
    fontFamily: 'ibmRegular',
    fontSize: 14,
    bottom: -40,
    marginLeft: -5,
    marginTop: 20,
    width: 150,
    textAlign: 'center',
    
  },
  pixText: {
    color: '#FFF',
    fontFamily: 'mediumIBM',
    fontSize: 20,
  },
  logo: {
    position: 'absolute',
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  pixLogo: {
    height: 24,
    width: 24,
  },
  buttons: {
    position: 'absolute',
    bottom: 70,
  },
  collapBody: {
    elevation: 5,
  },
  collapHeader: {
    elevation: 5,
    flexDirection: 'row',
  },
  statementButton: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: '5%',
  },
  statementText: {
    color: '#414141',
    fontFamily: 'boldIBM',
    fontSize: 18,
    paddingRight: 10,
  },
});
export default styles;
