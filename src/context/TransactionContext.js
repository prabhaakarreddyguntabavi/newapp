import React from "react";

const TransactionContext = React.createContext({
  selectOption: "DASHBOARD",
  onChangeSelectOption: () => {},
  transactionOption: "ALLTRANSACTION",
  onChangeTransactionOption: () => {},
  isUserAdmin: false,
  onChangeIsAdmin: () => {},
  userDict: {},
  updateReactDict: () => {},
});

export default TransactionContext;
