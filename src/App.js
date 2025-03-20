import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';

import image1 from './images/Sign in.png';
import image2 from './images/Home.png';
import image3 from './images/Account.png';
import image4 from './images/Account Continue.png';
import image5 from './images/AI Chatbot.png';
import image6 from './images/Jounal.png';
import image7 from './images/Mindfulness Exercises.png';
import image8 from './images/Notification.png';
import image9 from './images/Daily Check in.png';
import image10 from './images/Data Statistics (1).png';
import image11 from './images/Data Statistics (2).png';
import image12 from './images/Data Statistics.png';
import image13 from './images/Guided Breathing Exercise (1).png';
import image14 from './images/Guided Breathing Exercise (2).png';
import image15 from './images/Guided Breathing Exercise (3).png';
import image16 from './images/Guided Breathing Exercise (4).png';
import image17 from './images/Guided Breathing Exercise.png';

const designs = [
  image1, image2, image3, image4, image5, 
  image6, image7, image8, image9, image10,
  image11, image12, image13, image14, image15, 
  image16, image17
];

function Home() {
  const teamMembers = [
    { name: "Zehui Zhang", role: "Team Lead" },
    { name: "Shreya Padisetty", role: "CTO" },
    { name: "Augustin III Santiesteban", role: "Product Lead" },
    { name: "Kaiyang He", role: "UX Lead" }
  ];

return (  
    <div className="min-h-screen bg-white text-black font-sans">

      {/* Hero Section */}
      <div className="bg-[#4aa2dc] text-white h-screen flex flex-col justify-center items-center text-center px-8 py-16">
        <h1 className="text-5xl font-bold mb-4">Welcome to Solace</h1>
        <p className="text-xl mb-6 max-w-3xl mx-auto">An AI-powered chatbot designed to support those experiencing grief and emotional distress. We're here to help you navigate difficult times with compassion and understanding.</p>
        <Link
        to="project"
        className="bg-white text-[#4aa2dc] px-6 py-3 rounded-lg text-lg font-semibold hover:bg-[#e0f2f9]/90 hover:text-black transition-all"
      >
        Learn More
      </Link>
      </div>

      {/* About Solace */}
      <div id="about" className="w-full bg-[#f7f7f7] text-black py-12 px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">About Solace</h2>
          <p className="text-lg max-w-3xl mx-auto">
            Solace is an AI-powered chatbot designed to provide a compassionate digital companion. Our mission is to help users navigate their emotions during difficult times, offering support for grief, anxiety, and emotional distress.
          </p>
        </div>
      </div>

      {/* Goals Section */}
      <div className="py-12 px-8 bg-[#f1f7f9]">
        <h2 className="text-4xl font-bold text-center mb-12">Our Goals</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {[
            { title: "Provide Compassionate Support", description: "Offer a safe and understanding space for individuals navigating grief and emotional distress." },
            { title: "Encourage Emotional Well-being", description: "Equip users with mindfulness exercises, journaling, and check-ins to foster self-awareness and healing." },
            { title: "Promote Mental Health Awareness", description: "Break the stigma around grief and emotional struggles by making mental health support more accessible and engaging." }
          ].map((goal, i) => (
            <div key={i} className="bg-[#4aa2dc] p-8 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-bold text-white mb-4">{goal.title}</h3>
              <p className="text-white text-sm">{goal.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="py-12 px-8 bg-[#f1f7f9]">
        <h2 className="text-4xl font-bold text-center mb-12">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {[
            { title: "AI-Powered Conversations", description: "Engage with our chatbot through voice or text to receive compassionate support tailored to your emotions." },
            { title: "Daily Check-Ins", description: "Track your emotional well-being with daily prompts designed to help you reflect and process your feelings." },
            { title: "Mindfulness Exercises", description: "Practice guided mindfulness techniques to reduce stress and cultivate inner peace during difficult moments." },
            { title: "Personal Journaling", description: "Write and store private journal entries to express your thoughts and emotions in a safe digital space." },
            { title: "Progress Insights", description: "Gain valuable insights into your emotional journey with detailed reports on your activity, including check-ins, journaling habits, and mindfulness sessions." }
          ].map((feature, i) => (
            <div key={i} className="bg-[#b0dce7] p-8 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-bold text-[#4a4a4a] mb-4">{feature.title}</h3>
              <p className="text-[#4a4a4a] text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Meet Our Team */}
      <div className="py-20 px-8">
        <h2 className="text-4xl font-bold text-center mb-12">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 max-w-6xl mx-auto">
          {teamMembers.map((member, i) => (
            <div key={i} className="bg-[#e0f2f9] p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-bold mb-2">{member.name}</h3>
              <p className="text-sm text-gray-700">{member.role}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-[#4aa2dc] text-white py-16 px-8 text-center">
        <h2 className="text-3xl font-bold mb-6">Join Us in Making a Difference</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">Together, we can create a more compassionate world. Solace is more than just a project—it's a movement. Help us spread the message and bring support to those in need.</p>
        <Link to="" className="bg-white text-[#4aa2dc] px-8 py-3 rounded-lg text-lg font-semibold hover:bg-[#e0f2f9] transition-all">Contact Us</Link>
      </div>

    </div>
  );
}

function Project() {
  return (
    <div className="min-h-screen bg-white text-black font-sans">

      {/* Hero Section */}
      <div className="bg-[#4aa2dc] text-white h-screen flex flex-col justify-center items-center text-center px-8 py-16">
        <h1 className="text-5xl font-bold mb-4">Our Project: Solace</h1>
        <p className="text-xl mb-6 max-w-3xl mx-auto">A deep dive into the development process and research behind Solace, an AI-powered chatbot for grief and emotional support.</p>
      </div>

      {/* Project Overview */}
      <div className="py-12 px-8">
        <h2 className="text-4xl font-bold text-center mb-6">What is this Project?</h2>
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-lg max-w-3xl mx-auto">
            Solace is our mission to create an AI-powered chatbot designed to assist people in navigating their emotional struggles. Our goal is to provide a supportive, compassionate tool for those facing grief, anxiety, and distress.
          </p>
        </div>
      </div>

      {/* Timeline */}
      <div className="py-12 px-8 bg-[#f1f7f9]">
        <h2 className="text-4xl font-bold text-center mb-12">Timeline</h2>
        <div className="max-w-6xl mx-auto text-center">
          <div className="bg-[#b0dce7] p-6 rounded-lg shadow-lg mb-6">
            {/* Timeline Content */}
            <div className="text-left">
              <div className="mb-6">
                <h4 className="text-xl font-semibold">Week 5: Research & Planning</h4>
                <p className="text-sm">Surveys, interviews, and focus groups were conducted with college students to understand their grieving experiences and what they needed from a chatbot. This informed our user-centered design and guided chatbot interactions.</p>
              </div>
              
              <div className="mb-6">
                <h4 className="text-xl font-semibold">Week 6: Design & Development</h4>
                <p className="text-sm">Based on the research findings, an interface was developed that was accessible and comforting for college students. The focus was on ensuring emotional engagement and easy navigation.</p>
              </div>
              
              <div className="mb-6">
                <h4 className="text-xl font-semibold">Week 8: AI Chatbot Integration</h4>
                <p className="text-sm">AI-powered features, such as sentiment analysis, were integrated into the chatbot to detect and respond to students' emotional states appropriately. Early testing with college students began.</p>
              </div>
              
              <div className="mb-6">
                <h4 className="text-xl font-semibold">Week 10: Testing & Feedback</h4>
                <p className="text-sm">User testing was conducted with college students to gather feedback on how well the chatbot addressed their needs, and refinements were made based on their input to improve effectiveness and comfort.</p>
              </div>
              
              <div className="mb-2">
                <h4 className="text-xl font-semibold">Week 11: Finalization</h4>
                <p className="text-sm">The final version of the chatbot was ready for presentation. It was ensured that it met the emotional and cultural needs of students, offering customizable and compassionate support for those navigating grief.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Research Findings */}
      <div className="py-12 px-8 bg-[#f1f7f9]">
        <h2 className="text-4xl font-bold text-center mb-12">Our Research Findings</h2>
        <div className="max-w-6xl mx-auto text-center">
          <div className="bg-[#b0dce7] p-8 rounded-lg shadow-lg mb-8">
            <h3 className="text-xl font-bold mb-4">How We Conducted Our Research</h3>
            <p className="text-sm mb-6">We conducted a survey to gather insights on the emotional needs of our users and tailored Solace's features based on their feedback.</p>
            <Link
              to="https://uci.questionpro.com/a/TakeSurvey?tt=N7bGE5tu7WkECHrPeIW9eQ%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#4aa2dc] text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-white/90 hover:text-[#4aa2dc] transition-all"
            >
              Survey
            </Link>
          </div>
          {/* Grid container for the boxes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Box 1: Participants Demographics */}
            <div className="bg-[#d1e9f2] p-8 rounded-lg shadow-lg text-left">
              <h3 className="text-xl font-bold mb-4">Participants Demographics</h3>
              <ul className="list-disc pl-5 text-sm mb-6">
                <li>19 college students, 94.74% completion rate</li>
                <li>Most were third-year (36.84%) and fourth-year (52.63%)</li>
                <li>63.16% female, 36.84% male</li>
              </ul>
            </div>
            
            {/* Box 2: Grief Experience */}
            <div className="bg-[#d1e9f2] p-8 rounded-lg shadow-lg text-left">
              <h3 className="text-xl font-bold mb-4">Grief Experience</h3>
              <ul className="list-disc pl-5 text-sm mb-6">
                <li>72.22% experienced grief during college</li>
              </ul>
            </div>
            
            {/* Box 3: Preferred Coping Strategy */}
            <div className="bg-[#d1e9f2] p-8 rounded-lg shadow-lg text-left">
              <h3 className="text-xl font-bold mb-4">Preferred Coping Strategy</h3>
              <ul className="list-disc pl-5 text-sm mb-6">
                <li>61.11% prefer talking to friends and family</li>
              </ul>
            </div>
            
            {/* Box 4: Grief-Related Chatbot Interest */}
            <div className="bg-[#d1e9f2] p-8 rounded-lg shadow-lg text-left">
              <h3 className="text-xl font-bold mb-4">Grief-Related Chatbot Interest</h3>
              <ul className="list-disc pl-5 text-sm mb-6">
                <li>55.56% never used or are not interested</li>
                <li>33.33% open to trying</li>
                <li>11.11% have used one, with mixed results</li>
              </ul>
            </div>
          </div>
          
          {/* Second Row of Boxes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
            
            {/* Box 5: AI Voice vs. Text Chatbot Preferences */}
            <div className="bg-[#d1e9f2] p-8 rounded-lg shadow-lg text-left">
              <h3 className="text-xl font-bold mb-4">AI Voice vs. Text Chatbot Preferences</h3>
              <ul className="list-disc pl-5 text-sm mb-6">
                <li>33.33% want both voice and text</li>
                <li>27.78% prefer text</li>
                <li>11.11% prefer voice</li>
                <li>27.78% are unsure</li>
              </ul>
            </div>
            
            {/* Box 6: Comfort with AI Using a Loved One’s Voice */}
            <div className="bg-[#d1e9f2] p-8 rounded-lg shadow-lg text-left">
              <h3 className="text-xl font-bold mb-4">Comfort with AI Using a Loved One’s Voice</h3>
              <ul className="list-disc pl-5 text-sm mb-6">
                <li>83.33% uncomfortable</li>
                <li>11.11% comforting</li>
                <li>5.56% unsure</li>
              </ul>
            </div>
            
            {/* Box 7: Desired Features in Grief Chatbot */}
            <div className="bg-[#d1e9f2] p-8 rounded-lg shadow-lg text-left">
              <h3 className="text-xl font-bold mb-4">Desired Features in Grief Chatbot</h3>
              <ul className="list-disc pl-5 text-sm mb-6">
                <li>Daily check-ins (72.22%)</li>
                <li>Mindfulness exercises (61.11%)</li>
                <li>Personalized grief prompts (66.67%)</li>
                <li>Text interaction (50%)</li>
                <li>AI voice interaction (38.89%)</li>
                <li>Audio messages (11.11%)</li>
              </ul>
            </div>
            
            {/* Box 8: Importance of Customization */}
            <div className="bg-[#d1e9f2] p-8 rounded-lg shadow-lg text-left">
              <h3 className="text-xl font-bold mb-4">Importance of Customization</h3>
              <ul className="list-disc pl-5 text-sm mb-6">
                <li>33.33% very important</li>
                <li>61.11% somewhat important</li>
              </ul>
            </div>
          </div>
          
          {/* Takeaways Rectangle */}
          <div className="bg-[#b0dce7] p-8 mt-12 rounded-lg shadow-lg text-left">
            <h3 className="text-2xl font-bold mb-4">Takeaways</h3>
            <ul className="list-disc pl-5">
              <li>Students prefer structured support, personalization, and reflection over casual conversation.</li>
              <li>Offering both voice and text options is recommended.</li>
              <li>Avoid using a cloned voice of a loved one, as it may not be well-received.</li>
            </ul>
          </div>    
        </div>
      </div>

{/* UI/UX Designs */}
<div className="py-12 px-8">
  <h2 className="text-4xl font-bold text-center mb-12">UI/UX Designs</h2>
  <div className="max-w-6xl mx-auto text-center">
    <div className="bg-[#b0dce7] p-6 rounded-lg shadow-lg mb-6">
      <h3 className="text-2xl font-bold">Design Concepts</h3>
      <p className="text-sm mb-4">
        Our design focuses on ease of use, intuitive navigation, and a comforting interface for users in emotional distress.
      </p>
      <div className="grid grid-cols-4 gap-4">
        {designs.map((design, index) => (
          <div
            key={index}
            className="flex justify-center"
            style={{
              gridColumnEnd: (index + 1) % 4 === 0 ? "span 1" : "auto",
            }}
          >
            <img
              src={design}
              alt={`Design ${index + 1}`}
              className="rounded-lg shadow-lg"
            />
          </div>
        ))}
      </div>
    </div>
  </div>
</div>

      {/* Call to Action */}
      <div className="bg-[#4aa2dc] text-white py-16 px-8 text-center">
        <h2 className="text-3xl font-bold mb-6">Join Us in Making a Difference</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">Support our vision of creating a more compassionate world by joining the Solace movement.</p>
        <Link
        to=""
        className="bg-white text-[#4aa2dc] px-6 py-3 rounded-lg text-lg font-semibold hover:bg-[#e0f2f9]/90 hover:text-black transition-all"
      >
        Contact Us
      </Link>
      </div>
    </div>
  );
}

function Navbar() {
  return (
    <nav className="bg-[#4aa2dc] text-white p-6 fixed top-0 w-full shadow-lg flex justify-between items-center px-10 z-50">
      <div className="text-2xl font-bold">SOLACE</div>
      <div className="flex space-x-8">
        <Link to="/" className="hover:text-gray-300 transition-all">Home</Link>
        <Link to="/project" className="hover:text-gray-300 transition-all">Project</Link>
      </div>
    </nav>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop /> 
      <Navbar />
      <div className="overflow-hidden">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Project />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
