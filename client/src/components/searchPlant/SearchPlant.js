import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { searchPlant } from "../../actions/searchPlant";
import Img from "../../assets/noImage.jpg";

export const SearchPlant = ({ searchPlant, data: { data, error } }) => {
  const [plant, setPlant] = useState({
    plantName: "",
  });

  const handleChange = (e) =>
    setPlant({ ...plant, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    searchPlant(plant.plantName);
    console.log(plant.plantName);
  };

  //next link for pagination
  const getNext = (data) => {
    console.log(data.links.next);
    //function will eventually do pagination functionality.
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="input-group md-form form-sm form-2 pl-0 mt-4">
          <input
            className="form-control my-0 py-1 lime-border"
            type="text"
            placeholder="Search"
            name="plantName"
            onChange={handleChange}
            value={plant.plantName}
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
      <div className="row row-cols-1 row-cols-md-2">
        {data === null
          ? ""
          : data.data.map((plant, i) => (
              <div className="col mb-4 mt-4" key={i}>
                <div className="card card-border">
                  <img
                    src={plant.image_url === null ? Img : plant.image_url}
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h3 className="card-title">{plant.common_name}</h3>
                    <p>Scientific name: {plant.scientific_name}</p>
                    <p>Family: {plant.family}</p>
                    <p>Genus: {plant.genus}</p>
                    <Link to={`/plant/${plant.id}`}>
                      <button className="more-info-btn">More info</button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
        <div>
          {data === null ? (
            ""
          ) : (
            <div>
              <Link to="/" onClick={getNext}>
                first
              </Link>
              <Link to="/" onClick={getNext}>
                next
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  data: state.searchPlant,
});

export default connect(mapStateToProps, { searchPlant })(SearchPlant);
