import React from 'react'

const StudentTestimonials = () => {
  return (
    <>
       <section className=" py-16 px-6 ">
        <h2 className="text-4xl text-gray-100 font-bold text-center mb-12">Student Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="bg-white p-6 rounded-xl shadow">
            <p className='font-semibold text-blue-900'>"I learned so much from the graphic design courses. Simple and professional explanation!"</p>
            <p className="mt-4 font-semibold text-orange-500">— Ahmed Mohamed</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            <p className='font-semibold text-blue-900'>"The programming courses opened new job opportunities for me. Thank you!"</p>
            <p className="mt-4 font-semibold text-orange-500">— Sara Ali</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            <p className='font-semibold text-blue-900'>"The marketing content was great and helped me start my own project."</p>
            <p className="mt-4 font-semibold text-orange-500">— Kareem Samir</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default StudentTestimonials