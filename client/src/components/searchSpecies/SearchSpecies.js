import React, { useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getNextPage } from "../../actions/searchPlant";
import Img from "../../assets/noImage.jpg";

export const SearchSpecies = ({
   getNextPage,
   data: { data, error, nextPage, previousPage },
}) => {
   useEffect(() => {
      window.scrollTo(0, 0);
   });

   //next link for pagination
   const getNext = (url) => {
      getNextPage(url);
   };

   return (
      <Fragment>
         <div className="row row-cols-1 row-cols-md-2">
            {data === null
               ? ""
               : data.data.map((species, i) => (
                    <div className="col mb-4 mt-4" key={i}>
                       <div className="card card-border">
                          <img
                             src={
                                species.image_url === null
                                   ? Img
                                   : species.image_url
                             }
                             className="card-img-top"
                             alt="..."
                          />
                          <div className="card-body">
                             <h5 className="card-title">
                                {species.common_name === null
                                   ? "Name unavailable"
                                   : species.common_name}
                             </h5>
                             <p>Family: {species.family}</p>
                             <p>Genus: {species.genus}</p>
                             <Link to={`/species/${species.id}`}>
                                <button className="btn btn-dark myBtn">
                                   More info
                                </button>
                             </Link>
                          </div>
                       </div>
                    </div>
                 ))}
         </div>
         <div>
            {previousPage === null || previousPage === undefined ? (
               ""
            ) : (
               <button
                  className="pagination-btn"
                  onClick={() => getNext(previousPage)}
               >
                  <i className="fas fa-arrow-left"></i>
               </button>
            )}

            {nextPage === null ? (
               ""
            ) : (
               <button
                  className="pagination-btn"
                  onClick={() => getNext(nextPage)}
               >
                  <i className="fas fa-arrow-right"></i>
               </button>
            )}
         </div>
      </Fragment>
   );
};

const mapStateToProps = (state) => ({
   data: state.searchSpecies,
});

export default connect(mapStateToProps, { getNextPage })(SearchSpecies);
