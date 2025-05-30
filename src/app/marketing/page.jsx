import { roadmapMarketing, videosMarketing } from '@/data/courses'

import React from 'react'


const page = () => {
  return (
    <>
          <div className="p-6 max-w-5xl mx-auto space-y-14 py-30">
      <h1 className="text-4xl font-bold text-center text-blue-800">🎯 التسويق الرقمي – روودماب + فيديوهات</h1>

      <section>
        <h2 className="text-2xl font-semibold mb-12 text-blue-600">📈 خطة تعلم التسويق الرقمي</h2>
        <div className="space-y-6">
          {roadmapMarketing.map((step, index) => (
            <div key={index} className="p-4 bg-white rounded-2xl shadow border">
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                {step.topics.map((topic, i) => (
                  <li key={i}>{topic}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4 text-blue-600">🎥 فيديوهات تعليمية مختارة</h2>
        <div className="space-y-4">
          {videosMarketing.map((video, index) => (
            <div key={index} className="p-4 bg-white rounded-2xl shadow border">
              <h3 className="text-lg font-semibold text-blue-700 hover:underline">
                <a href={video.url} target="_blank" rel="noopener noreferrer">
                  {video.title}
                </a>
              </h3>
              <p className="text-gray-600">بواسطة: {video.creator}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
    </>
  )
}

export default page