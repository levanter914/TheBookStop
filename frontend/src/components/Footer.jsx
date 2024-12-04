import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-secondary text-white py-10 px-4">
      {/* Footer Container */}
      <div className="container mx-auto">
        {/* Footer Grid for Mobile and Larger Screens */}
        <div className="flex flex-wrap gap-y-8 md:flex-row md:justify-between">
          {/* Left Column (About Us and FAQs) */}
          <div className="w-full md:w-1/2 flex flex-col md:flex-row justify-between">
            {/* About Us Section */}
            <div className="mb-6 md:mb-0 md:w-1/2">
              <h3 className="font-semibold text-lg mb-4">About Us</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/about" className="hover:text-primary">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/contact-us" className="hover:text-primary">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* FAQs Section */}
            <div className="md:w-1/2">
              <h3 className="font-semibold text-lg mb-4">FAQs</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/faqs" className="hover:text-primary">
                    Frequently Asked Questions (FAQs)
                  </Link>
                </li>
                <li>
                  <Link to="/chat-guidelines" className="hover:text-primary">
                    Chat Guidelines
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column (Terms of Use and Contact Us) */}
          <div className="w-full md:w-1/2 flex flex-col md:flex-row justify-between">
            {/* Terms of Use Section */}
            <div className="mb-6 md:mb-0 md:w-1/2">
              <h3 className="font-semibold text-lg mb-4">Terms Of Use</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/listing-policy" className="hover:text-primary">
                    Listing Policy
                  </Link>
                </li>
                <li>
                  <Link to="/privacy-policy" className="hover:text-primary">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Us Section */}
            <div className="md:w-1/2">
              <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
              <p className="mb-2">Stay Connected</p>
              <div className="flex space-x-4">
                <Link
                  to="/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary"
                >
                  <FaInstagram size={24} />
                </Link>
                <Link
                  to="/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary"
                >
                  <FaFacebook size={24} />
                </Link>
                <Link
                  to="/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary"
                >
                  <FaLinkedin size={24} />
                </Link>
                <Link
                  to="/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary"
                >
                  <FaTwitter size={24} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 border-t border-gray-700 pt-6 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} TheBookStop. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
