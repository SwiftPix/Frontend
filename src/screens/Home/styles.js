import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#00A896',
  },
  headerText: {
    color: '#fff',
    fontSize: 18,
    flex: 1,
    textAlign: 'center',
  },
  headerIcons: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    

  },
  iconHeader: {
    width: 32,
    height: 32,
    marginHorizontal: 5,
  },
  body: {
    flexGrow: 1,
    padding: 16,
  },
  list: {
    marginBottom: 20,
  },
  balanceTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textBalance: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  balance: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  transactionItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  buttons: {
    padding: 26,
    alignItems: 'center',
  },
  pixBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#00A896',
    borderRadius: 8,
  },
  pixLogo: {
    width: 32,
    height: 32,
    marginRight: 8,
  },
  pixText: {
    color: '#fff',
    fontSize: 16,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    color: '#000',
    fontSize: 18,
  },
});

export default styles;
