import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types';

 const PublicRoute = function({ component: Component, auth: { isAuthenticated }, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        !isAuthenticated ? <Component {...props} /> : <Redirect to="/error" />
      } 
    />
  )
}

PublicRoute.propTypes = {
  auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  auth: state.auth
}) 

export default connect(mapStateToProps)(PublicRoute)