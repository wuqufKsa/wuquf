import Header from "../components/Headers/Header"
import "./style.css"

const Home = () => {
  return (
    <>
  {/* Header */}
  
  <Header/>
  {/* // Header // */}
  {/* Section Home */}
  <section className="Home">
    <div className="img">
      <img src="assets/image.png" alt="" />
    </div>
    <div className="text-Home">
      <h1>اكتشاف مواقف السيارات القريبة والمتاحة</h1>
      <a href="../Login and register/Login.html">إبدأ الآن</a>
    </div>
  </section>
  {/* // Section Home // */}
  {/* script */}
  {/* // script // */}
</>

  )
}

export default Home