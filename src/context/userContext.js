import React, { createContext, useState } from 'react';

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [id, setId] = useState('');
  const [balance, setBalance] = useState(0);
  const value = React.useMemo(
    () => ({
      id,
      setId,
      balance,
      setBalance,
    }),
    [id, balance]
  );
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserProvider;
