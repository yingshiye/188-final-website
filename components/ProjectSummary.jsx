import React, { useState } from 'react';

const tabContent = {
  Overview: [
    'Problem: Square assembly via imitation learning.',
    'Input: Low-dimensional demonstration trajectories.',
    'Goal: Learn control policy for precise assembly.'
  ],
  Methodology: [
    'Segment demos based on grasp state: reach, lift, place.',
    'Use DMP to fit motion for each phase.',
    'Control via position + rotation delta (with PID).'
  ],
  Results: [
    '88% success rate over 100 episodes.',
    'Most successes within 1000–1500 steps.',
    'Failures often due to unseen object orientations.'
  ],
  Discussion: [
    'Policy is consistent and efficient in nominal cases.',
    'Struggles in edge cases—consider adding data diversity.',
    'Extending to vision-based generalization could help.'
  ]
};

export default function ProjectSummary() {
  const [activeTab, setActiveTab] = useState('Overview');

  return (
    <div className="container mx-auto p-6 space-y-8">
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-2">Robosuite Square Assembly Project</h1>
        <p className="text-lg text-gray-600">Supervised imitation learning for precise robotic manipulation</p>
      </section>

      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-4 border-b">
          <h2 className="text-2xl font-semibold">Demo Video</h2>
          <p className="text-gray-500">Watch the robot assemble the square task in real-time.</p>
        </div>
        <div className="h-64 bg-black flex items-center justify-center">
          <video className="w-full h-full object-cover" controls>
            <source src="/188demo.mp4" type="video/mp4" />
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
        <div className="flex space-x-4 border-b mb-4">
          {Object.keys(tabContent).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-2 px-4 -mb-px font-medium border-b-2 ${
                activeTab === tab
                  ? 'border-indigo-600 text-indigo-600'
                  : 'border-transparent text-gray-700 hover:text-gray-900'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <ul className="list-disc pl-5 space-y-2">
          {tabContent[activeTab].map((point, idx) => (
            <li key={idx} className="text-gray-800">{point}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}
