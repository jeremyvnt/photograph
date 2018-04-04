import { connect } from "react-redux";
import { fetchListPhotos } from "../actions/homeAction";
import Home from "../components/home";

const mapStateToProps = state => {
  	return {
	    photos: state.home.photos,
	    category: state.home.category,
	    dimension: state.home.dimensions,
	};
};

export default connect(mapStateToProps, {
  	fetchListPhotos: type => fetchListPhotos(type)
})(Home);
