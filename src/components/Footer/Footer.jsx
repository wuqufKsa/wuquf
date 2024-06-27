import React from 'react'

const Footer = () => {
  return (
     <>
       {/* Footer */}
        <footer>
    <div className="project-footer">
      <div className="card-footer">
        <img
          src="assets/TUWAIQ.png"
          alt=""
          style={{ width: 200, height: 50 }}
        />
      </div>
      <div className="card-footer">
        <h4>
          <a href="#">الشروط والأحكام</a> <span>سياسة الخصوصية</span>
        </h4>
      </div>
      <div className="card-footer">
        <i className="fa-brands fa-instagram" />
        <i className="fa-brands fa-snapchat" />
        <a href="https://twitter.com/wuqufKSA">
          <i className="fa-brands fa-twitter" />
        </a>
        <i className="fa-brands fa-discord" />
        <i className="fa-brands fa-linkedin" />
        <i className="fa-brands fa-youtube" />
      </div>
      <div className="card-footer">
        <h4>
          <a href="#">شارك كمطور</a> <span>حول وقوف</span>
        </h4>
      </div>
      <div className="card-footer">
        <img
          src="assets/Logo.png"
          alt=""
          style={{ width: 100, height: 50 }}
        />
      </div>
    </div>
    <h3>جميع الحقوق محفوظة لتطبيق وقوف 2024</h3>
  </footer>
  {/* // Footer // */}
     </>
  )
}

export default Footer