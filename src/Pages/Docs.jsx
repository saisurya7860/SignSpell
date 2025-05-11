import React from 'react';
import Navbar from '../Components/Navbar';
import Sidebar from '../Components/Sidebar';

const Docs = () => {
  const sections = [
    { id: 'overview', title: 'Overview' },
    { id: 'what-does-it-do', title: 'What Does It Do?' },
    { id: 'how-it-works', title: 'How It Works' },
    { id: 'key-features', title: 'Key Features' },
    { id: 'whats-coming-next', title: "What's Coming Next" },
    { id: 'our-team', title: 'Our Team' },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar with section links */}
      <Sidebar sections={sections} />

      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Navbar with language toggle */}
        <Navbar />

        {/* Scrollable content area */}
        <div className="overflow-auto p-6 space-y-12">
          <section id="overview">
            <h2 className="text-2xl font-semibold mb-4">Overview</h2>
            <p className="text-gray-700 space-y-2">
              Sign Spell is an AI-powered real-time speech-to-sign-language translator designed to empower individuals who are hearing or speech impaired. By converting spoken language into Indian Sign Language (ISL) using animated 3D avatars, the system ensures barrier-free communication—especially in environments like government meetings, live public events, and broadcasts where accessibility is often overlooked.
            </p>
          </section>

          <section id="what-does-it-do">
            <h2 className="text-2xl font-semibold mb-4">What Does It Do?</h2>
            <p className="text-gray-700 mb-2">
              Sign Spell listens to live or recorded speech and translates it into sign language in real time. The signed output is visually rendered through a virtual 3D avatar that performs the exact gestures corresponding to the spoken content.
            </p>
            <ul className="list-disc list-inside text-gray-700">
              <li>Government events, public meetings, and live broadcasts</li>
              <li>Public service applications and civic platforms</li>
              <li>Educational settings and awareness programs</li>
              <li>Any situation where hearing-impaired individuals deserve equal access to spoken information</li>
            </ul>
          </section>

          <section id="how-it-works">
            <h2 className="text-2xl font-semibold mb-4">How It Works (Simplified Overview)</h2>
            <ol className="list-decimal list-inside text-gray-700 space-y-2">
               <li><strong>🎤 Voice Input:</strong> The user speaks into their device microphone or uploads an audio clip.</li>
              <li><strong>🔊 Speech Recognition:</strong> The system transcribes the speech into text using advanced speech-to-text models.</li>
              <li><strong>🧹 Language Understanding:</strong> The text is cleaned up and analyzed to understand context, grammar, and meaning.</li>
              <li><strong>🖐 Sign Mapping:</strong>
                <ul className="list-disc list-inside ml-4">
                  <li>If a direct ISL sign is available for a word or phrase, it’s mapped <span className="font-bold text-green-400">instantly</span>.</li>
                  <li>If not, Sign Spell uses fingerspelling to animate each letter of the word.</li>
                </ul>
              </li>
              <li><strong>👤 Avatar Animation:</strong> A 3D avatar on screen performs the sign language gestures in real time.</li>
              <li><strong>📡 Real-Time Response:</strong> All of this happens seamlessly, allowing the user to watch the signs unfold as the speaker talks.</li>
            </ol>
          </section>

          <section id="key-features">
            <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>🔄 <span className="font-bold text-green-400">Real-time</span> speech-to-sign translation</li>
              <li>💬 Fingerspelling fallback for uncommon words</li>
              <li>👩‍💻 3D animated avatar for natural visual delivery</li>
              <li>🌐 Cross-platform accessibility (desktop & mobile)</li>
              <li>📈 Usage tracking for optimization and insights</li>
              <li>📤 No installation required — works via browser</li>
            </ul>
          </section>

          <section id="whats-coming-next">
            <h2 className="text-2xl font-semibold mb-4">What's Coming Next</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>🌍 Support for multiple sign languages (ASL, BSL, LSF, etc.)</li>
              <li>🔁 Bi-directional translation (gesture input → voice output)</li>
              <li>📺 Integration with TV, OTT platforms, YouTube, and news streams</li>
              <li>👤 Gender- and culture-specific avatars for personal relevance</li>
              <li>📱 Edge AI capabilities for offline/mobile use in remote regions</li>
              <li>📄 Add-on plugins for interpreting YouTube videos, PDFs, and presentations</li>
            </ul>
          </section>

          <section id="our-team">
            <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
            <ul className="text-gray-700 space-y-1">
              <li><span className='text-lg font-semibold'>👩‍🎨Pradnya K T</span> – Team Lead | UI/UX Designer & Frontend Developer</li>
              <li><span className='text-lg font-semibold'>👩‍💻Sri Mathi S</span> – Backend Developer</li>
              <li><span className='text-lg font-semibold'>🧑‍💻Srinivasan R</span> – AI/ML Developer</li>
              <li><span className='text-lg font-semibold'>🧑‍💻Surya B</span>– Frontend Developer</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Docs;