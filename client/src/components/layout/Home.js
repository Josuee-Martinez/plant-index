import React from "react";
import SearchSpecies from "../searchSpecies/SearchSpecies";
import SearchForm from "../searchSpecies/SearchForm";
// import Random from "../searchSpecies/Random";
export const Home = () => {
   return (
      <div className="container center">
         <SearchForm />
         <SearchSpecies />
         {/* <Random /> */}
      </div>
   );
};

export default Home;
