import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { clearCurrentProfile } from "../../actions/profileActions";

class Navbar extends Component {
  onLogoutClick(e) {
    e.preventDefault();
    this.props.clearCurrentProfile();
    this.props.logoutUser();
    // Redirect to login
    window.location.href = "/login";
  }

  render() {
    const { isAuthenticated, user } = this.props.auth;

    const authLinks = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/profiles">
            {" "}
            <span>
              <i className="fas fa-users" />{" "}
            </span>Browse
          </Link>
        </li>

        <li className="nav-item">
          <Link
            className="nav-link"
            // style={{ fontSize: "20px" }}
            to="/feed"
          >
            <span>
              <i className="fas fa-align-center" />
            </span>
            Post Feed
          </Link>
        </li>

        <li className="nav-item">
          <Link
            className="nav-link"
            // style={{ fontSize: "20px" }}
            to="/dashboard"
          >
            <span>
              <i className="far fa-edit" />
            </span>
            Dashboard
          </Link>
        </li>

        <li className="nav-item">
          <img
            className="rounded-circle"
            src={user.avatar}
            alt={user.name}
            style={{
              width: "50px",
              // border: "1px solid #593196",
              // marginRight: "30px",
              marginLeft: "20px"
            }}
            title="You must have a Gravatar connected to your email to display your image"
          />{" "}
        </li>

        <li className="nav-item">
          <a
            href=""
            onClick={this.onLogoutClick.bind(this)}
            className="nav-link"
            // style={{ fontSize: "20px" }}
          >
            {" "}
            Logout
          </a>
        </li>
      </ul>
    );

    const guestLinks = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/profiles">
            {" "}
            <span>
              <i className="fas fa-users" />{" "}
            </span>Browse
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/register">
            Sign Up
          </Link>
        </li>
        <li className="nav-item ">
          <Link className="nav-link" to="/login">
            {" "}
            Login
          </Link>
        </li>
      </ul>
    );

    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-4">
        <Link className="navbar-brand" to="/">
          Doggiverse
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#mobile-nav"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="mobile-nav" />
        <ul className="navbar-nav mr-auto" />
        {isAuthenticated ? authLinks : guestLinks}
      </nav>
    );
  }
}

Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logoutUser, clearCurrentProfile })(
  Navbar
);
