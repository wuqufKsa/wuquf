import { Outlet } from "react-router-dom";
import "./auth.css";

const AuthLayout = () => {
  return (
    <>
      <div className="body">
        
          <div className="Form-content"><Outlet /></div> 
        
        <div className="img"><img src="assets/Login.png" alt="login" style={{background: "#FDFDFD"}} /></div>
      </div>
    </>
  );
};

export default AuthLayout;
