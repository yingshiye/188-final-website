import React, { useState } from 'react';

const tabContent = {
  Overview: [
    'Problem: Square assembly via imitation learning.',
    'Input: Low-dimensional demonstration trajectories.',
    'Goal: Learn control policy for precise assembly.'
  ],
  Methodology: [
    'Use behavior cloning with DMP segmentation.',
    'Three grasp-based phases: approach, lift, place.',
    'Learn DMPs + use PID for end-effector control.'
  ],
  Results: [
    '88% success over 100 runs.',
    'Most successes took 1000–1500 steps.',
    'Failures mostly due to unseen orientations.'
  ],
  Discussion: [
    'Model is sample-efficient, but brittle to edge cases.',
    'More robust orientation variation training could help.',
    'Also consider adding vision-based generalization.'
  ]
};

export default function ProjectSummary() {
  const [activeTab, setActiveTab] = useState('Overview');

  return (
    <div className="p-6 space-y-6">
      {/* Tabs */}
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

      {/* Tab content */}
      <ul className="list-disc pl-5 space-y-2">
        {tabContent[activeTab].map((point, idx) => (
          <li key={idx} className="text-gray-800">{point}</li>
        ))}
      </ul>
    </div>
  );
}
