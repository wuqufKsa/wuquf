import React from 'react'
import './AboutUs.css'
import Header from '../components/Headers/Header'
import Footer from '../components/Footer/Footer'

const AboutUs = () => {
  return (
    <> 
     <>
  {/* Header */}
  <Header/>
  {/* // Header // */}
  {/* About US  Home */}
  <section className="AboutUS">
    <div className="img-About">
      <img src="assets/img_about.png" alt="" />
    </div>
    <div className="info-About">
      <h1>من نحن؟</h1>
      <p>
        وقوف هو تطبيق يعمل على تحسين عملية البحث عن مواقف للسيارات بطريقة سريعة
        وفعالة، بالإضافة الى توفير حلول تقنية مبتكرة لتوفير الوقت والجهد.
      </p>
    </div>
  </section>
  {/* // About US  Home // */}
  {/* Goals */}
  <section className="Goals">
    <div className="project-goals">
      <h1 className="title-goal">اهداف وقوف</h1>
      <div className="priject-card-goals">
        <div className="card">
          <p>
            دعم رؤية المملكة 2030 في تحقيق الاستدامة والتنمية الشاملة من خلال
            توفير حلول مبتكرة لإدارة المواقف وتقليل الازدحام.
          </p>
        </div>
        <div className="card">
          <p>
            تعزيز الكفاءة والفاعلية في إدارة وتنظيم المواقف بطريقة فعالة وسلسة.
          </p>
        </div>
        <div className="card">
          <p>
            تعزيز الراحة للمواطنين والزوار من خلال توفير وصول سهل وسلس إلى مواقف
            السيارات.
          </p>
        </div>
      </div>
    </div>
  </section>
  {/* // Goals // */}
  {/* virson */}
  <section className="virson">
    <div className="project-virson">
      <div className="project-virson-card">
        <div className="card-virson">
          <h1>قيَّمنا</h1>
          <p>التميز, الابتكار, التركيز, الابداع, العمل الجماعي,.</p>
        </div>
        <div className="card-virson">
          <h1>رسالتنا</h1>
          <p>
            رسالتنا هي تحسين تجربة الجميع في إيجاد مواقف السيارات وتسهيل عملية
            إدارتها، من خلال تقديم حلول فعّالة تعزز الراحة والكفاءة وتسهم في
            تحقيق التنمية المستدامة للمجتمع.
          </p>
        </div>
        <div className="card-virson">
          <h1>رؤيتنا</h1>
          <p>
            رؤيتنا تتمثل في تطوير برنامج يسعى لدعم رؤية المملكة 2030 من خلال
            تقديم حلول تكنولوجية متقدمة لتنظيم وإدارة المواقف، والمساهمة في بناء
            مدن ذكية مستدامة تحقق رضا المجتمع وتعزز التنمية الشاملة.
          </p>
        </div>
      </div>
    </div>
  </section>
  {/* // virson // */}
{/*  Footer  */}
  <Footer/>
  {/* // Footer // */} 
</>

    </>
  )
}

export default AboutUs