import { Route, Routes, BrowserRouter } from "react-router-dom";
import { useState } from "react";

import TransctionContext from "./context/TransctionContext";

import LoginForm from "./components/LoginForm";
import Dashboard from "./components/Dashboard";
import TransactionPage from "./components/TransactionPage";
import NotFound from "./components/NotFound";

// import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  const [selectOption, onChangeSelect] = useState("DASHBOARD");

  const [transactionOption, SelectTransactionOption] =
    useState("ALLTRNSACTION");

  const onChangeSelectOption = (id) => {
    onChangeSelect(id);
  };

  const onChangeTransactionOption = (id) => {
    SelectTransactionOption(id);
  };

  return (
    <TransctionContext.Provider
      value={{
        selectOption,
        transactionOption,
        onChangeSelectOption: onChangeSelectOption,
        onChangeTransactionOption: onChangeTransactionOption,
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route exact path="/login" element={<LoginForm />} />
          <Route exact path="/" element={<Dashboard />} />
          <Route exact path="/transaction" element={<TransactionPage />} />
          <Route path="/not-found" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TransctionContext.Provider>
  );
};

export default App;
