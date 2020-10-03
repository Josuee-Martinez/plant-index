import React, { useEffect } from "react";
import { connect } from "react-redux";
import { searchPlantById } from "../../actions/searchPlant";

const SearchId = ({ match, searchPlantById, plant: { data, error } }) => {
  useEffect(() => {
    searchPlantById(match.params.id);
  }, [searchPlantById]);
  return <div>helo</div>;
};

const mapStateToProps = (state) => ({
  plant: state.searchPlant,
});

export default connect(mapStateToProps, { searchPlantById })(SearchId);
