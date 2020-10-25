import React, { useEffect } from "react";
import { connect } from "react-redux";
import { searchPlantById } from "../../actions/searchPlant";

const SearchId = ({ match, searchPlantById, data: { plant } }) => {
  useEffect(() => {
    searchPlantById(match.params.id);
  }, [searchPlantById]);
  return (
    <div>
      {plant === null ? (
        ""
      ) : (
        <div className="container">
          {/* <div className="row">
            <div className="col-12"> */}
          <div className="card card-border mt-5">
            <img src={plant.image_url} className="card-img-top" alt="..." />
            <div className="center p-4">
              <h5>{plant.common_name}</h5>
              <p>
                Also know as "{plant.scientific_name}" is a plant of the{" "}
                {plant.family.name} family of genus {plant.genus.name}
              </p>
            </div>
            <ul className="list-group">
              <li className="list-group-item">
                Bibliography{" "}
                <span className="right-align">{plant.bibliography}</span>
              </li>
              <li className="list-group-item">
                Family{" "}
                <span className="right-align">{plant.family.common_name}</span>
              </li>
              <li className="list-group-item">
                Genus <span className="right-align">{plant.genus.name}</span>
              </li>
              <li className="list-group-item">
                Scientific Name
                <span className="right-align">{plant.scientific_name}</span>
              </li>
            </ul>
          </div>
          <div className="card card-border mt-4 p-4">
            <div className="center">
              <h5>Other sources</h5>
            </div>
            {plant.sources.map((item, i) => (
              <p key={i}>
                <a href={item.url}>{item.url}</a>
              </p>
            ))}
          </div>
        </div>
        //   </div>
        // </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  data: state.searchPlant,
});

export default connect(mapStateToProps, { searchPlantById })(SearchId);
