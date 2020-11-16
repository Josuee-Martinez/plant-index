import React, { useState } from "react";
import { searchSpecies } from "../../actions/searchPlant";
import { connect } from "react-redux";

export const SearchForm = ({ searchSpecies }) => {
   const [species, setSpecies] = useState({
      speciesName: "",
   });

   const handleChange = (e) =>
      setSpecies({ ...species, [e.target.name]: e.target.value });

   const handleSubmit = (e) => {
      e.preventDefault();
      searchSpecies(species.speciesName);
      console.log(species.speciesName);
   };

   return (
      <form onSubmit={handleSubmit}>
         <div className="input-group md-form form-sm form-2 pl-0 mt-4">
            <input
               className="form-control my-0 lime-border"
               type="text"
               placeholder="Search for plant"
               name="speciesName"
               onChange={handleChange}
               value={species.speciesName}
            />
            <div className="input-group-append">
               <button
                  type="submit"
                  className="btn input-group-text lime-border lighten-2"
               >
                  <i className="fas fa-search text-grey" aria-hidden="true"></i>
               </button>
            </div>
         </div>
      </form>
   );
};

export default connect(null, { searchSpecies })(SearchForm);
