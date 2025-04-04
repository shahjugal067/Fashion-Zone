import { useState } from "react";
import { FaSearch, FaEnvelope, FaPhone } from "react-icons/fa";

const HelpCenter = () => {
  const [search, setSearch] = useState("");

  const faqs = [
    { question: "How do I reset my password?", answer: "Go to the settings page and click on 'Reset Password'." },
    { question: "How can I contact support?", answer: "You can contact support via email or phone below." },
    { question: "Where can I update my profile information?", answer: "Navigate to your account settings to update your profile." }
  ];

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Help Center</h1>
      
      {/* Search Bar */}
      <div className="relative mb-6">
        <input
          type="text"
          placeholder="Search for help..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-2 border border-green-500 outline-none rounded-lg shadow-sm"
        />
        <FaSearch className="absolute top-3 right-3 text-yellow-500 w-5" />
      </div>
      
      {/* FAQs */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
        <ul>
          {faqs
            .filter((faq) => faq.question.toLowerCase().includes(search.toLowerCase()))
            .map((faq, index) => (
              <li key={index} className="mb-4 p-4 border rounded-lg shadow-sm">
                <p className="font-semibold">{faq.question}</p>
                <p className="text-gray-600">{faq.answer}</p>
              </li>
            ))}
        </ul>
      </div>

      {/* Contact Support */}
      <div className="mt-8 p-6 border rounded-lg shadow-sm">
        <h2 className="text-2xl font-semibold mb-4">Contact Support</h2>
        <p className="flex items-center gap-2 mb-2"><FaEnvelope /> shahjugal067@gmail.com</p>
        <p className="flex items-center gap-2"><FaPhone /> +977 9846638937</p>
      </div>
    </div>
  );
};

export default HelpCenter;
