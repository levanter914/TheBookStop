import React from "react";
import footerLogo from "../assets/footer-logo.png";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Footer = () => {
  return (
    <footer className="bg-secondary text-white py-10 px-4">
      {/* Top Section */}
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Left Side - Logo and Nav */}
        <div className="md:w-1/2 w-full">
          <img src={footerLogo} alt="Logo" className="mb-5 w-36" />
          <ul className="flex flex-col md:flex-row gap-4">
            <li>
              <Link to="/" className="hover:text-primary">
                Home
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-primary">
                Services
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-primary">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-primary">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Right Side - Newsletter */}
        <div className="md:w-1/2 w-full">
          <p className="mb-4">
            Subscribe to our newsletter to receive the latest updates, news, and
            offers!
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-l-md text-black"
              href="mailto:singhsaurabh1606@gmail.com"
            />
            <button className="bg-primary px-6 py-2 rounded-r-md hover:bg-primary-dark">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center mt-10 border-t border-gray-700 pt-6">
        {/* Left Side - Privacy Links */}
        <ul className="flex gap-6 mb-4 md:mb-0">
          <li>
            <Link to="/privacy" className="hover:text-primary">
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link to="/terms" className="hover:text-primary">
              Terms of Service
            </Link>
          </li>
        </ul>

        {/* Right Side - Social Icons */}
        <div className="flex gap-6">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary"
          >
            <FaFacebook size={24} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary"
          >
            <FaInstagram size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;




// import React from 'react';

// const Footer = () => {
//   return (
//     <footer className="px-4 divide-y dark:bg-secondary dark:text-white ">
//       <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
//         {/* Brand Section */}
//         <div className="lg:w-1/3">
//           <a rel="noopener noreferrer" href="#" className="flex justify-center space-x-3 lg:justify-start">
//             {/* <div className="flex items-center justify-center w-12 h-12 rounded-full dark:bg-violet-600">
//               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" className="flex-shrink-0 w-5 h-5 rounded-full dark:text-gray-50">
//                 <path d="M18.266 26.068l7.839-7.854 4.469 4.479c1.859 1.859 1.859 4.875 0 6.734l-1.104 1.104c-1.859 1.865-4.875 1.865-6.734 0zM30.563 2.531l-1.109-1.104c-1.859-1.859-4.875-1.859-6.734 0l-6.719 6.734-6.734-6.734c-1.859-1.859-4.875-1.859-6.734 0l-1.104 1.104c-1.859 1.859-1.859 4.875 0 6.734l6.734 6.734-6.734 6.734c-1.859 1.859-1.859 4.875 0 6.734l1.104 1.104c1.859 1.859 4.875 1.859 6.734 0l21.307-21.307c1.859-1.859 1.859-4.875 0-6.734z"></path>
//               </svg>
//             </div> */}
//             <span className="self-center text-2xl font-semibold">TheBookStop</span>
//           </a>
//         </div>

//         {/* Links Section */}
//         <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
//           <div className="space-y-3">
//             <h3 className="tracking-wide uppercase dark:text-gray-900">Product</h3>
//             <ul className="space-y-1">
//               <li><a rel="noopener noreferrer" href="#">Features</a></li>
//               <li><a rel="noopener noreferrer" href="#">Integrations</a></li>
//               <li><a rel="noopener noreferrer" href="#">Pricing</a></li>
//               <li><a rel="noopener noreferrer" href="#">FAQ</a></li>
//             </ul>
//           </div>
//           <div className="space-y-3">
//             <h3 className="tracking-wide uppercase dark:text-gray-900">Company</h3>
//             <ul className="space-y-1">
//               <li><a rel="noopener noreferrer" href="#">Privacy</a></li>
//               <li><a rel="noopener noreferrer" href="#">Terms of Service</a></li>
//             </ul>
//           </div>
//           <div className="space-y-3">
//             <h3 className="tracking-wide uppercase dark:text-gray-900">Developers</h3>
//             <ul className="space-y-1">
//               <li><a rel="noopener noreferrer" href="#">Public API</a></li>
//               <li><a rel="noopener noreferrer" href="#">Documentation</a></li>
//               <li><a rel="noopener noreferrer" href="#">Guides</a></li>
//             </ul>
//           </div>
//           <div className="space-y-3">
//             <h3 className="uppercase dark:text-gray-900">Social media</h3>
//             <div className="flex justify-start space-x-3">
//               <a rel="noopener noreferrer" href="#" title="Facebook" className="flex items-center p-1">
//                 <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
//                   <path d="M32 16c0-8.839-7.167-16-16-16-8.839 0-16 7.161-16 16 0 7.984 5.849 14.604 13.5 15.803v-11.177h-4.063v-4.625h4.063v-3.527c0-4.009 2.385-6.223 6.041-6.223 1.751 0 3.584 0.312 3.584 0.312v3.937h-2.021c-1.984 0-2.604 1.235-2.604 2.5v3h4.437l-0.713 4.625h-3.724v11.177c7.645-1.199 13.5-7.819 13.5-15.803z"></path>
//                 </svg>
//               </a>
//               <a rel="noopener noreferrer" href="#" title="Twitter" className="flex items-center p-1">
//                 <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-current">
//                   <path d="M23.954 4.569a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.691 8.094 4.066 6.13 1.64 3.161a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.061a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z"></path>
//                 </svg>
//               </a>
//               <a rel="noopener noreferrer" href="#" title="Instagram" className="flex items-center p-1">
//                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" className="w-5 h-5 fill-current">
//                   <path d="M16 2.88c4.271 0 4.781 0.021 6.469 0.093 1.557 0.073 2.405 0.333 2.968 0.553 0.751 0.291 1.276 0.635 1.844 1.197 0.557 0.557 0.901 1.088 1.192 1.839 0.22 0.563 0.48 1.411 0.553 2.968 0.072 1.688 0.093 2.199 0.093 6.469s-0.021 4.781-0.099 6.469c-0.084 1.557-0.344 2.405-0.563 2.968-0.303 0.751-0.641 1.276-1.199 1.844-0.563 0.557-1.099 0.901-1.844 1.192-0.556 0.22-1.416 0.48-2.979 0.553-1.697 0.072-2.197 0.093-6.479 0.093s-4.781-0.021-6.48-0.099c-1.557-0.084-2.416-0.344-2.979-0.563-0.751-0.303-1.281-0.641-1.844-1.199-0.559-0.563-0.901-1.099-1.188-1.844-0.224-0.556-0.479-1.416-0.563-2.979-0.073-1.688-0.099-2.197-0.099-6.469s0.021-4.781 0.099-6.48c0.084-1.557 0.339-2.416 0.563-2.979 0.292-0.751 0.635-1.281 1.188-1.844 0.557-0.557 1.088-0.901 1.844-1.188 0.563-0.224 1.412-0.479 2.979-0.563 1.688-0.072 2.197-0.093 6.48-0.093zM16 0c-4.349 0-4.896 0.021-6.594 0.099-1.703 0.078-2.865 0.344-3.865 0.745-1.052 0.417-1.948 0.96-2.839 1.849-0.891 0.891-1.432 1.792-1.849 2.844-0.401 1.001-0.667 2.161-0.745 3.865-0.084 1.7-0.099 2.245-0.099 6.594s0.021 4.896 0.099 6.594c0.078 1.703 0.344 2.865 0.745 3.865 0.417 1.052 0.96 1.948 1.849 2.839 0.891 0.891 1.792 1.432 2.844 1.849 1 0.401 2.161 0.667 3.865 0.745 1.698 0.078 2.245 0.099 6.594 0.099s4.896-0.021 6.594-0.099c1.703-0.078 2.865-0.344 3.865-0.745 1.052-0.417 1.948-0.96 2.839-1.849 0.891-0.891 1.432-1.792 1.849-2.844 0.401-1 0.667-2.161 0.745-3.865 0.084-1.7 0.099-2.245 0.099-6.594s-0.021-4.896-0.099-6.594c-0.078-1.703-0.344-2.865-0.745-3.865-0.417-1.052-0.96-1.948-1.849-2.839-0.891-0.891-1.792-1.432-2.844-1.849-1.001-0.401-2.161-0.667-3.865-0.745-1.698-0.078-2.245-0.099-6.594-0.099z"></path>
//                   <path d="M16 7.8c-4.531 0-8.2 3.67-8.2 8.2s3.67 8.2 8.2 8.2 8.2-3.67 8.2-8.2-3.67-8.2-8.2-8.2zM16 20.5c-2.479 0-4.5-2.021-4.5-4.5s2.021-4.5 4.5-4.5 4.5 2.021 4.5 4.5-2.021 4.5-4.5 4.5zM24.8 6.4c0 1.06-0.86 1.92-1.92 1.92s-1.92-0.86-1.92-1.92c0-1.06 0.86-1.92 1.92-1.92s1.92 0.86 1.92 1.92z"></path>
//                 </svg>
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Bottom Footer */}
//       <div className="py-6 text-sm text-center dark:text-gray-400">© 2024 Brand Name. All rights reserved.</div>
//     </footer>
//   );
// };

// export default Footer;
