import React from "react";

const TransctionContext = React.createContext({
  selectOption: "DASHBOARD",
  onChangeSelectOption: () => {},
  transactionOption: "ALLTRNSACTION",
  onChangeTransactionOption: () => {},
  isUserAdmin: false,
  onChangeIsAdmin: () => {},
  userDict: {},
  updateReactDict: () => {},
});

export default TransctionContext;
