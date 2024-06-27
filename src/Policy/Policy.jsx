import React from 'react'
import Header from '../components/Headers/Header'
import Footer from '../components/Footer/Footer'
import Accordion from '../components/Accordion'
const Policy = () => {
  return (
    <>
      <Header/>
    
    <div className='bg-white py-7'>
      <h1 className='text-[#9e6b8b] text-[30px] font-bold text-center'>الشروط والأحكام السياسية</h1>
      <div className=" h-screen flex justify-start items-center mt-10 flex-col">
        <Accordion
          title="الشروط والأحكام"
          answer="I like to use iOS products"
        />
        <Accordion
          title="البيانات المستخدمة"
          answer="I like to use Tailwind"
        />
        <Accordion title="المسؤولية" answer="I am using Supabase!" />
        <Accordion title="كلمات السر والأمان" answer="I am using Supabase!" />
        <Accordion title="الملكية الفكرية وحقوق النشر" answer="I am using Supabase!" />
        <Accordion title="شروط عامة" answer="I am using Supabase!" />
      </div>
    </div>

  
      <Footer/>
    </>
  )
}

export default Policy