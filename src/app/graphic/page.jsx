import React from 'react'
import { roadmap, videos } from '@/data/courses'
const GraphicDesignPage = () => {
  return (
    <>
        <main className="p-6 space-y-10 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold text-center text-indigo-700">روودماب تعلم الجرافيك ديزاين</h1>

      <section className="space-y-6">
        {roadmap.map((section, index) => (
          <div key={index} className="bg-white p-4 rounded-2xl shadow border">
            <h2 className="text-xl font-semibold text-indigo-600 mb-2">{section.stage}</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              {section.topics.map((topic, i) => (
                <li key={i}>{topic}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section>
        <h2 className="text-2xl font-bold text-indigo-700 mb-4">أفضل فيديوهات تعليمية</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {videos.map((video, index) => (
            <a
              key={index}
              href={video.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-indigo-50 hover:bg-indigo-100 transition p-4 rounded-2xl border border-indigo-200"
            >
              <h3 className="text-lg font-semibold text-indigo-800">{video.title}</h3>
              <p className="text-sm text-gray-600">القناة: {video.channel}</p>
            </a>
          ))}
        </div>
      </section>
    </main>
    </>
  )
}

export default GraphicDesignPage