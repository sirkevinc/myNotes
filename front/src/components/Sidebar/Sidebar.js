import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import { connect } from 'react-redux';
import { logout } from '../../actions';
class Sidebar extends Component {
  
  handleLogOut = () => {
    this.props.logout();
  }

  render() {
    console.log('Sidebar props', this.props)
      return (
        <nav className="Sidebar-container">
          <div className="Sidebar">
            <h1>Notes</h1>
            <div className="Sidebar-buttons">
            <Link to="/notes">
              <button className="Sidebar-button" >
                View Your Notes
              </button>
            </Link>
            <Link to="/create">
              <button className="Sidebar-button">
                  + Create New Note
              </button>
            </Link>
            <Link to="/loggedout">
              <button className="Logout-button" onClick={this.handleLogOut}>Logout</button>
            </Link>
            </div>
          </div>
        </nav>
      )
    }
}

const mapStateToProps = state => {
  return {
    state: state,
  }
}

export default connect(mapStateToProps, { logout })(Sidebar);
