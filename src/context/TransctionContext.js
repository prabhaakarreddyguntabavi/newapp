import React from "react";

const TransctionContext = React.createContext({
  selectOption: "DASHBOARD",
  onChangeSelectOption: () => {},
  transactionOption: "ALLTRNSACTION",
  onChangeTransactionOption: () => {},
});

export default TransctionContext;
