import { connect } from 'react-redux'
import { fetchListPhotos } from '../actions/homeAction'
import Nav from '../components/nav'

const mapStateToProps = state => {
  return {
    nav: state.nav,
  }
}

export default connect(mapStateToProps)(Nav)