import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { searchSpecies, getNextPage } from "../../actions/searchPlant";
import Img from "../../assets/noImage.jpg";

export const SearchSpecies = ({
  searchSpecies,
  getNextPage,
  data: { data, error, nextPage, previousPage },
}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

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

  //next link for pagination
  //links
  const getNext = (url) => {
    getNextPage(url);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="input-group md-form form-sm form-2 pl-0 mt-4">
          <input
            className="form-control my-0 py-1 lime-border"
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
      <h3 className="mt-4">
        {data === null
          ? "Search for a plant"
          : `Search results for: ${species.speciesName}`}
      </h3>
      <div className="row row-cols-1 row-cols-md-2">
        {data === null
          ? ""
          : data.data.map((species, i) => (
              <div className="col mb-4 mt-4" key={i}>
                <div className="card card-border">
                  <img
                    src={species.image_url === null ? Img : species.image_url}
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
                      <button className="btn btn-dark myBtn">More info</button>
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
            className="btn btn-dark myBtn"
            onClick={() => getNext(previousPage)}
          >
            {" "}
            Prev
          </button>
        )}

        {nextPage === null ? (
          ""
        ) : (
          <button
            className="btn btn-dark myBtn pagingBtn"
            onClick={() => getNext(nextPage)}
          >
            {" "}
            Next
          </button>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  data: state.searchSpecies,
});

export default connect(mapStateToProps, { searchSpecies, getNextPage })(
  SearchSpecies
);
