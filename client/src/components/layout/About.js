import React from "react";

const About = () => {
   return (
      <div className="container mt-4">
         <p>
            This App was built using the "MERN" Stack and the plant data is
            provided by the{" "}
            <a
               href="https://trefle.io/"
               target="_blank"
               rel="noopener noreferrer"
            >
               trefle API
            </a>
         </p>
         <p>
            This is a project that will keep growing and I will be adding more
            functionality and more plant information. If you are a developer and
            would like to contribute to this project I welcome you to make
            contributions on the Github page for this project{" "}
            <a
               href="https://github.com/Josuee-Martinez/plant-index"
               target="_blank"
               rel="noopener noreferrer"
            >
               here
            </a>
         </p>
      </div>
   );
};

export default About;
