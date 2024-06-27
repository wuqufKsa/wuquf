import React from 'react'

const Login = () => {
  return (
    <>
  <div className="Form-continer">
    {/* title From */}
    <div className="title-From">
      <h1>تسجيل الدخول</h1>
      <p>مرحبًا مجددًا. قم بإدخال بياناتك للوصول إلى حسابك البريد الإلكتروني</p>
    </div>
    {/* // title Form // */}
    {/* INPUT FORM */}
    <form className="Form">
      <div className="input">
        <label htmlFor="Email"> البريد الإلكتروني</label>
        <div className="input-group">
          <input
            type="text"
            id="Email"
            placeholder="pnu.edu.sa"
            autoComplete="off"
            required=""
          />
          <div className="icon">
            <i className="fa-regular fa-envelope" aria-hidden="true" />
          </div>
        </div>
      </div>
      <div className="input">
        <label htmlFor="Password">كلمة المرور</label>
        <div className="input-group">
          <input
            type="password"
            id="Password"
            placeholder="************"
            autoComplete="off"
            required=""
          />
          <div className="icon">
            <i className="fa-solid fa-lock" aria-hidden="true" />
          </div>
        </div>
      </div>
      <div className="checkbox">
        <label htmlFor="checkbox">تذكرني</label>
        <input type="checkbox" id="checkbox" />
      </div>
      <button id="submit" onclick="Login()">
        تسجيل الدخول
      </button>
    </form>
    {/* // INPUT FORM // */}
    {/* FOOTER FORM */}
    <h4>
      ليس لديك حساب؟<a href="./register.html">سجل هنا</a>
    </h4>
    {/* // FOOTER FORM // */}
  </div>
  {/* // Form  //*/}
</>

  )
}

export default Login