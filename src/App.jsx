import './global.css'
import { Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import AuthLayout from "./Auth/AuthLayout";
import Login from "./Auth/Form/Login";
import Register from "./Auth/Form/Register";
import AboutUs from "./Aboutus/AboutUs";
import Profile from "./Profile/Profile";
import Policy from "./Policy/Policy";
const App = () => {
  return (
    <>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="sing-in" element={<Login />} />
          <Route path="sing-up" element={<Register />} />
        </Route>
        <Route path="About" element={<AboutUs />} />
        <Route path="profile" element={<Profile />} />
        <Route path="Policy_Privacy" element={<Policy/>}/>
        <Route path="/" element={<Home />}/>
      </Routes>
    </>
  );
};

export default App;
