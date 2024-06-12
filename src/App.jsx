import { Route, Routes } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import RegistrationPage from "./pages/RegistrationPage";
const App = () => {
  return (
    <>
      <Routes>
        <Route element={<HomePage />} path="/" exact />
        <Route element={<LoginPage />} path="/login" exact />
        <Route element={<RegistrationPage />} path="/register" exact />
        <Route element={<ProfilePage />} path="/me" exact />

        <Route element={<ErrorPage />} path="*" exact />
      </Routes>
    </>
  );
};

export default App;
