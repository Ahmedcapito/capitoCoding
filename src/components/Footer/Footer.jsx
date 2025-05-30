import React from 'react'

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-900 text-white py-4 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <p>ahmedcapito12345@gmail.com</p>
            <p>+201281892951</p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#">Facebook</a>
              <a href="#">Twitter</a>
              <a href="#">Instagram</a>
            </div>
          </div>
        </div>
        <p className="text-center mt-8 text-sm">© 2025 All rights reserved.</p>
      </footer>
    </>
  )
}

export default Footer