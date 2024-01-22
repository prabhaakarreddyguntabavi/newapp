import { Route, Routes, BrowserRouter } from "react-router-dom";

import LoginForm from "./components/LoginForm";
import Dashboard from "./components/Dashboard";
import NotFound from "./components/NotFound";
// import ProtectedRoute from './components/ProtectedRoute'

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/login" element={<LoginForm />} />
      <Route exact path="/" element={<Dashboard />} />
      <Route path="/not-found" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;
