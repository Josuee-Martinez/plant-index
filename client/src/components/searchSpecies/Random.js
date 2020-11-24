import React, { useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import { searchRandom } from "../../actions/searchPlant";
import Img from "../../assets/noImage.jpg";

import { connect } from "react-redux";
const Random = ({ searchRandom, data: { random } }) => {
   let randomSpecies = [
      "grape",
      "strawberry",
      "banana",
      "orange",
      "oregano",
      "pear",
      "thyme",
      "peach",
      "avocado",
   ];

   let randomOne =
      randomSpecies[Math.floor(Math.random() * randomSpecies.length)];

   useEffect(() => {
      searchRandom(randomOne);
   }, [searchRandom]);
   return (
      <Fragment>
         {random === null ? (
            ""
         ) : (
            <div className="random mt-4 mb-4">
               <h5>Featured plant:</h5>
               <div className="card card-border">
                  <img
                     src={random.image_url === null ? Img : random.image_url}
                     className="card-img-top img"
                     alt="..."
                  />
                  <div className="card-body">
                     <h5 className="card-title">
                        {random.common_name === null
                           ? "Name unavailable"
                           : random.common_name}
                     </h5>
                     <p>Family: {random.family}</p>
                     <p>Genus: {random.genus}</p>
                     <Link to={`/species/${random.id}`}>
                        <button className="btn btn-dark myBtn">
                           More info
                        </button>
                     </Link>
                  </div>
               </div>
            </div>
         )}
      </Fragment>
   );
};

const mapStateToProps = (state) => ({
   data: state.searchSpecies,
});

export default connect(mapStateToProps, { searchRandom })(Random);
