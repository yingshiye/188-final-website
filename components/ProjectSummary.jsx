import React from 'react';

export default function ProjectSummary() {
  return (
    <div className="container mx-auto p-6 space-y-8">
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-2">Robosuite Square Assembly Project</h1>
        <p className="text-lg text-gray-600">Supervised imitation learning for precise robotic manipulation</p>
      </section>

      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-4 border-b">
          <h2 className="text-2xl font-semibold">Demo Video</h2>
        </div>
        <div className="h-64 bg-black flex items-center justify-center">
          <video className="w-full h-full" controls>
            {/* Uncomment and update source when ready to embed your demo.mp4 */}
            {/* <source src="/demo.mp4" type="video/mp4" /> */}
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Key Visualizations</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <img src="/env.png" alt="Env setup" className="rounded shadow" />
          <img src="/episode_outcomes.png" alt="Episode outcomes" className="rounded shadow" />
          <img src="/steps_to_success_hist.png" alt="Steps to success" className="rounded shadow" />
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Summary</h2>
        <p><strong>Success Rate:</strong> 88% over 100 episodes.</p>
        <p><strong>Consistency:</strong> 85 of 88 successes within 1000–1500 steps.</p>
      </section>
    </div>
  );
}