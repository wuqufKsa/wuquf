import React from 'react'
import Header from '../components/Headers/Header'
import "./Profile.css"

const Profile = () => {
  return (
    <>
     <>
  {/* Header */}
  <Header/>
  {/* // Header // */}
  {/* Continer */}
  <div className="continer">
    {/* Profile */}
    <div className="Form-Profile">
      <div className="profile">
        <div className="input">
          <label htmlFor="name">الإسم الكامل</label>
          <input
            type="text"
            placeholder="سعود المطيري"
            id="name"
            defaultValue="سعود المطيري"
          />
        </div>
        <div className="input">
          <label htmlFor="Nationality">الجنسية</label>
          <input
            type="text"
            placeholder="سعودي"
            id="Nationality"
            defaultValue="سعودي"
          />
        </div>
        <div className="input">
          <label htmlFor="City">المنطقة</label>
          <input
            type="text"
            placeholder="الرياض"
            id="City"
            defaultValue="الرياض"
          />
        </div>
        <div className="input">
          <label htmlFor="manORwomen">الجنس</label>
          <input type="text" id="manORwomen" />
        </div>
      </div>
    </div>
    {/* // Profile // */}
    {/* content */}
    <div className="content">
      <div className="content-form">
        <div className="img-profile">
          <img src="assets/Profile-img.png" alt="" />
        </div>
        <ul>
          <li className="active">
            <a href="#">
              <strong>تعديل الملف الشخصي</strong>
              <i className="fa-regular fa-user" />
            </a>
          </li>
          <li>
            <a href="#">
              <strong>الامان</strong>
              <i className="fa-solid fa-lock" />
            </a>
          </li>
          <li>
            <a href="#">
              <strong>مساعد</strong>
              <i className="fa-solid fa-square-check" />
            </a>
          </li>
          <li>
            <a href="#">
              <strong>تسجيل الخروج</strong>
              <i className="fa-solid fa-right-from-bracket" />
            </a>
          </li>
        </ul>
      </div>
    </div>
    {/* // content // */}
  </div>
  {/* // Continer // */}
</>

    </>
  )
}

export default Profile