import "./Header.css"
import {Link} from "react-router-dom"
const Header = () => {
  return (
    <>
  {/* nav bar */}
  <header>
    <nav className="navbar">
      <div style={{ display: "flex", flexDirection: "row-reverse" }}>
        <Link to="/" className="titleWebsite">
          <img src="assets/Logo.png" alt="" />
        </Link>
        <ul className="nav-links">
        
          <li>
            <Link to="/About">من نحن</Link>
          </li>
          <li>
            <Link to="/">الرئيسية</Link>
          </li>
        </ul>
      </div>
      <div className="right-Header">
        <Link to="/sing-up" className="active">
          تسجيل الدخول
        </Link>
      </div>
      <i className="fas fa-bars menu-icon" id="menu" onClick="MENU()" />
    </nav>
  </header>
  {/* // nav bar // */}
  {/* Nvbar Mobile */}
  <header className="MENU-Mobile">
    <nav className="navbar-Mobile">
      <h1>
        <Link href="#">وقوف</Link>
        <img src="assets/Logo.png" alt="" />
      </h1>
      <ul className="nav-links-Mobile">
        <li>
          <Link href="../Home/Tuwaiq1.html">الرئيسية</Link>
        </li>
        <li>
          <Link href="../AboutUs/AboutUS.html">من نحن</Link>
        </li>
      
        
      </ul>
      <i className="fa-solid fa-x" onClick="Close()" id="close" />
    </nav>
  </header>
  {/* // Nvbar Mobile // */}
</>

  )
}

export default Header;