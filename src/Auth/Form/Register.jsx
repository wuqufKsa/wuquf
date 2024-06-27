
const Register = () => {
  return (
    <>
     <>
  <div className="Form-continer">
    {/* title From */}
    <div className="title-From">
      <h1>إنشاء حساب</h1>
      <p>مرحبًا . قم بإدخال بياناتك لإنشاء حسابك</p>
    </div>
    {/* // title Form // */}
    {/* INPUT FORM */}
    <form className="Form">
      <div className="input">
        <label htmlFor="name">الإسم الكامل</label>
        <div className="input-group">
          <input
            type="text"
            id="name"
            placeholder="الإسم"
            autoComplete="off"
            required=""
          />
          <div className="icon">
            <i className="fa-regular fa-user" />
          </div>
        </div>
      </div>
      <div className="input">
        <label htmlFor="number">رقم الجوال</label>
        <div className="input-group">
          <input
            type="number"
            id="number"
            placeholder="966 XXX XXX XX"
            autoComplete="off"
            required=""
          />
          <div className="icon">
            <i className="fa-solid fa-phone" />
          </div>
        </div>
      </div>
      <div className="input">
        <label htmlFor="NationalityRegister">الجنسية</label>
        <div className="input-group">
          <input
            type="text"
            id="NationalityRegister"
            placeholder="سعودي"
            autoComplete="off"
            required=""
          />
          <div className="icon">
            <i className="fa-solid fa-location-dot" />
          </div>
        </div>
      </div>
      <div className="input">
        <label htmlFor="CityLogin">منطقة</label>
        <div className="input-group">
          <input
            type="text"
            id="CityLogin"
            placeholder="الرياض"
            autoComplete="off"
            required=""
          />
          <div className="icon">
            <i className="fa-solid fa-location-dot" />
          </div>
        </div>
      </div>
      <div className="input">
        <label htmlFor="email"> البريد الإلكتروني</label>
        <div className="input-group">
          <input
            type="email"
            id="email"
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
        <label htmlFor="password">كلمة المرور</label>
        <div className="input-group">
          <input
            type="password"
            id="password"
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
      <div className="input">
        <label>الجنس</label>
        <div className="option">
          <div className="radio">
            <label htmlFor="man">ذكر</label>
            <input
              type="radio"
              id="man"
              name="radio"
              defaultValue="ذكر"
              required=""
            />
          </div>
          <div className="radio">
            <label htmlFor="women">أنثى</label>
            <input
              type="radio"
              id="women"
              name="radio"
              defaultValue="أنثى"
              required=""
            />
          </div>
        </div>
      </div>
      <button id="submit" className="submitRegister" type="submit">
        إنشاء حساب
      </button>
    </form>
    {/* // INPUT FORM // */}
    {/* FOOTER FORM */}
    <h4>
      هل لديك حساب؟<a href="./Login.html">تسجيل الدخول</a>
    </h4>
    {/* // FOOTER FORM // */}
  </div>
  {/* // Form  //*/}
</>

    </>
  )
}

export default Register