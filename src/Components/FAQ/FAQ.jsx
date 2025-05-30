import React from 'react'

const FAQ = () => {
  return (
    <>
       <section className="bg-white py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Frequently Asked Questions</h2>
        <div className="max-w-4xl mx-auto space-y-6">
          <div className='text-center'>
            <h3 className="font-semibold">Are the certificates accredited?</h3>
            <p>Yes, we provide accredited electronic certificates from the platform.</p>
          </div>
          <div className='text-center'>
            <h3 className="font-semibold">Are the courses free?</h3>
            <p>Some courses are free, and some are paid at affordable prices.</p>
          </div>
          <div className='text-center'>
            <h3 className="font-semibold">Is there technical support?</h3>
            <p>Yes, we provide 24/7 support via email and Telegram.</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default FAQ