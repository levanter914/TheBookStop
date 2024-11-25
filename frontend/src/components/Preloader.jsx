// import React from "react";
// import "./Preloader.css"; // Make sure to add styles

// const Preloader = () => {
//   return (
//     <div className="preloader">
//       <div className="book-container">
//         <div className="book">
//           <div className="cover"></div>
//           <div className="pages">
//             <div className="page"></div>
//             <div className="page"></div>
//             <div className="page"></div>
//           </div>
//         </div>
//       </div>
//       <h2 className="loading-text">Loading...</h2>
//     </div>
//   );
// };

// export default Preloader;


//import { BookLoader } from "react-awesome-loaders";
import "./Preloader.css"; // Import the CSS file for Preloader styles

export const Preloader = () => {
  return (
    <div className="preloader-container">
      <BookLoader
        background={"linear-gradient(135deg, #3E2723, #6D4C41)"}  
        desktopSize={"100px"}
        mobileSize={"80px"}
        textColor={"#6D4C41"}  
      />
    </div>
  );
};

export default Preloader;



