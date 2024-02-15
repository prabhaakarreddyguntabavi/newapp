import { Route, Routes, BrowserRouter } from "react-router-dom";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";

import TransactionContext from "./context/TransactionContext";

import LoginForm from "./components/LoginForm";
import Dashboard from "./components/Dashboard";
import TransactionPage from "./components/TransactionPage";
import ProfileDetails from "./components/ProfileDetails";
import NotFound from "./components/NotFound";

// import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  const [selectOption, onChangeSelect] = useState("DASHBOARD");

  const [isUserAdmin, onChangeAdmin] = useState(false);

  useEffect(() => {
    const jwtToken = Cookies.get("jwt_token");

    if (jwtToken === "3") {
      onChangeAdmin(true);
    } else {
      onChangeAdmin(false);
    }
  }, []);

  const [transactionOption, selectTransactionOption] =
    useState("ALLTRANSACTION");

  const onChangeSelectOption = (id) => {
    onChangeSelect(id);
  };

  const onChangeTransactionOption = (id) => {
    selectTransactionOption(id);
  };

  return (
    <TransactionContext.Provider
      value={{
        selectOption,
        transactionOption,
        isUserAdmin,
        onChangeSelectOption: onChangeSelectOption,
        onChangeTransactionOption: onChangeTransactionOption,
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route exact path="/login" element={<LoginForm />} />
          <Route exact path="/" element={<Dashboard />} />
          <Route exact path="/transaction" element={<TransactionPage />} />
          <Route exact path="/profile" element={<ProfileDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TransactionContext.Provider>
  );
};

export default App;
