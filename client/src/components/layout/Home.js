import React from "react";

const Home = () => {
   return (
      <section className="landing-section" id="home">
         <div className="landing">
            <h1 className="landing-heading">Welcome to Plant Index.</h1>
            <p className="landing-paragraph">
               a place for gardeners and nature lovers to search and find plant
               information using the{" "}
               <a
                  href="https://trefle.io/"
                  target="_blank"
                  rel="noopener noreferrer"
               >
                  trefle API
               </a>
            </p>
         </div>
      </section>
   );
};

export default Home;
