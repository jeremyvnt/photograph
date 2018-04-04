import { connect } from "react-redux";
import HeaderProfileButton from "../components/header-profile-button";

const mapStateToProps = state => {
  return {
  	loggedIn: state.auth.loggedIn
  }
}

export default connect(mapStateToProps)(HeaderProfileButton);
