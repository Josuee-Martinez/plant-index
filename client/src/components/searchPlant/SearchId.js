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
          <div className="row">
            <div className="col-12">
              <div className="card card-border mt-5">
                <img src={plant.image_url} className="card-img-top" alt="..." />
                <div className="card-body center">
                  <h5>{plant.scientific_name}</h5>
                  <p>
                    Also know as "{plant.common_name}" is a plant of the{" "}
                    {plant.family.name} family of genus {plant.genus.name}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  data: state.searchPlant,
});

export default connect(mapStateToProps, { searchPlantById })(SearchId);
