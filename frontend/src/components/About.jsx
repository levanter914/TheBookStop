import React from "react";
import { FaLinkedin } from "react-icons/fa";
import bookImg from "../assets/bookimg.jpg";

const About = () => {
  const teamMembers = [
    {
      name: "Saurabh",
      role: "Founder & Lead Developer",
      linkedin: "https://www.linkedin.com/in/sau1606",
    },
    {
      name: "Shambhavi",
      role: "UI/UX Designer",
      linkedin: "https://www.linkedin.com/in/shambhavi0325",
    },
    {
      name: "Yash",
      role: "Backend Engineer",
      linkedin: "https://www.linkedin.com/in/yash2204",
    },
    {
      name: "Neer",
      role: "UI/UX Designer",
      linkedin: "https://www.linkedin.com/in/neer-pandey-6a5b6131b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app ",
    },
  ];

  return (
    <div className="about-section bg-gradient-to-b from-favorite to-gray-50 py-10 px-6">
      {/* About Header */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-secondary mb-4">About Us</h1>
        <p className="text-gray-600 text-lg">
          Welcome to{" "}
          <span className="font-semibold text-secondary">TheBookStop</span>, a
          platform built by book lovers for book lovers. Our mission is to make
          buying and selling second-hand books seamless, affordable, and
          community-driven.
        </p>
      </div>

      {/* About Section */}
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        {/* Left Content */}
        <div>
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Our Vision
          </h2>
          <p className="text-gray-600 leading-relaxed">
            At TheBookStop, we believe that every book deserves a second chance
            and every reader deserves access to affordable literature. By
            connecting buyers and sellers directly, we aim to create a
            sustainable and eco-friendly book-sharing community.
          </p>
        </div>

        {/* Right Image */}
        <div className="relative border border-secondary shadow-lg">
          <img
            src={bookImg}
            alt="Books"
            className="rounded-lg shadow-md w-full h-auto border border-secondary"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-favorite via-transparent to-gray-50 opacity-60 rounded-lg"></div>
        </div>
      </div>

      {/* Team Section */}
      <div className="mt-16">
        <h2 className="text-3xl font-semibold text-center text-secondary mb-8">
          Meet Our Team
        </h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="team-member p-6 bg-white rounded-lg shadow-md text-center transition-transform transform hover:scale-105"
            >
              <img
                src={`https://via.placeholder.com/150x150?text=${member.name}`}
                alt={member.name}
                className="w-24 h-24 mx-auto rounded-full mb-4 border-4 border-secondary"
              />
              <h3 className="text-xl font-semibold text-gray-800">
                {member.name}
              </h3>
              <p className="text-gray-600 mb-4">{member.role}</p>
              {/* LinkedIn Profile */}
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-secondary hover:text-secondary transition-colors"
              >
                <FaLinkedin className="mr-2 text-xl" />
                View LinkedIn
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
