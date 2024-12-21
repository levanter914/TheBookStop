import React, { useState } from "react";

const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const faqs = [
    {
      question: "What is TheBookStop?",
      answer:
        "TheBookStop is a platform where users can buy and sell second-hand books easily and affordably.",
    },
    {
      question: "How do I sell my books?",
      answer:
        "To sell your books, create an account, upload details about your books, and set a price. Buyers can contact you directly via the platform.",
    },
    {
      question: "Is it free to list books?",
      answer:
        "Yes, listing books on TheBookStop is completely free. We aim to make second-hand books accessible for everyone.",
    },
    {
      question: "How do I contact a seller?",
      answer:
        "You can use the 'Contact Seller' button on the book's listing page to message the seller directly.",
    },
    {
      question: "What payment methods are accepted?",
      answer:
        "We recommend secure payment methods like UPI, PayPal, or cash on delivery for local transactions.",
    },
  ];

  return (
    <div className="faq-section bg-favorite py-10 shadow-lg rounded-2xl px-6">
      <h1 className="text-4xl font-bold text-center text-secondary mb-10">Frequently Asked Questions</h1>
      <div className="max-w-3xl mx-auto space-y-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`faq-item border rounded-lg overflow-hidden transition-all duration-300 ${
              activeIndex === index ? "shadow-lg bg-white" : "bg-gray-100"
            }`}
          >
            {/* Question Box */}
            <div
              className="faq-question flex justify-between items-center px-4 py-3 cursor-pointer"
              onClick={() => toggleFaq(index)}
            >
              <h2 className="text-lg font-medium text-gray-800">{faq.question}</h2>
              <button className="text-xl font-bold text-secondary">
                {activeIndex === index ? "✖" : "+"}
              </button>
            </div>
            {/* Answer Box */}
            <div
              className={`faq-answer px-4 overflow-hidden transition-all duration-500 ${
                activeIndex === index ? "max-h-40 py-2" : "max-h-0"
              }`}
            >
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faqs;
