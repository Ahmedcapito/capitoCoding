'use client';
import { frontend, backend } from "@/data/courses";
export default function ProgrammingPage() {

  const renderRoadmap = (title, roadmap) => (
    <section>
      <h2 className="text-2xl font-bold mb-4 text-blue-700">{title}</h2>
      <div className="space-y-6">
        {roadmap.map((step, i) => (
          <div key={i} className="bg-white p-4 shadow rounded-2xl border">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{step.title}</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              {step.topics.map((topic, j) => (
                <li key={j}>{topic}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );

  const renderVideos = (title, videos) => (
    <section>
      <h2 className="text-2xl font-bold mb-4 text-blue-700">{title}</h2>
      <div className="space-y-4">
        {videos.map((video, i) => (
          <div key={i} className="bg-white p-4 shadow rounded-2xl border">
            <a
              href={video.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 text-lg font-semibold hover:underline"
            >
              {video.title}
            </a>
            <p className="text-gray-600">بواسطة: {video.creator}</p>
          </div>
        ))}
      </div>
    </section>
  );

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-12">
      <h1 className="text-4xl font-bold text-center text-blue-900">
        💻 خارطة طريق تعلم البرمجة – Frontend & Backend
      </h1>

      {renderRoadmap("🧭 روودماب – Frontend", frontend.roadmap)}
      {renderVideos("🎥 فيديوهات – Frontend", frontend.videos)}

      {renderRoadmap("🧭 روودماب – Backend", backend.roadmap)}
      {renderVideos("🎥 فيديوهات – Backend", backend.videos)}
    </div>
  );
}
