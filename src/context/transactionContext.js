import React, { createContext, useState } from 'react';

export const TransctionContext = createContext();

const TransctionProvider = ({ children }) => {
  const [transaction, setTransaction] = useState({
    endToEndId: '',
    key: '',
    amount: 0,
    description: '',
    from: {
      id: '',
      name: '',
      cpf: '',
      institution: '',
      agency: '',
      account: '',
    },
    to: {
      id: '',
      name: '',
      cpf: '',
      institution: '',
      agency: '',
      account: '',
    },
  });
  const value = React.useMemo(
    () => ({
      transaction,
      setTransaction,
    }),
    [transaction]
  );
  return (
    <TransctionContext.Provider value={value}>
      {children}
    </TransctionContext.Provider>
  );
};

export default TransctionProvider;
