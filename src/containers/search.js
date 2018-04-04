import { connect } from "react-redux";
import { fetchMethods, fetchListPhotos, fetchListCollections, fetchListUsers } from "../actions/search";
import Search from "../components/search";

const mapStateToProps = state => {
  return {
    photos: state.search.photos,
    collections: state.search.collections,
    users: state.search.users,
    text: state.search.text,
    dimension: state.home.dimensions,
    totalPhotos: state.search.totalPhotos,
    totalUsers: state.search.totalUsers,
    totalCollections: state.search.totalCollections,
  };
};

export default connect(mapStateToProps, {
  fetchListPhotos: (text, page) => fetchListPhotos(text, page),
  fetchListUsers: (text, page) => fetchListUsers(text, page),
  fetchListCollections: (text, page) => fetchListCollections(text, page),
})(Search);