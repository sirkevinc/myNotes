import React, { Component } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import UserSidebar from '../UserSidebar/UserSidebar';
import NotesList from '../NotesList/NotesList';
import { connect } from 'react-redux';

import { getAllNotes, authUser } from '../../actions';
import './App.css';

class App extends Component {
  state = {
    notes: [],
  }

  componentDidMount() {
    if (localStorage.getItem('token')) {
      this.props.authUser();
    }
    this.setState({
      notes: this.props.notes
    });
    this.props.getAllNotes();
  };

  render() {
    const props = this.props;
    console.log('app props', props);
    console.log('app state', this.state);
    return (
      <div>
        {this.props.state.notes.error ? 
        <div className="Not-Logged-In">
          <div className="HomePage-container">
          <UserSidebar />
          <div className="HomePage-Text">
            Must Login to view this page!
            If you do not have an account, please register!
          </div>
        </div>
      </div> : 
          <div className="App">
            <Sidebar />
            <div className="Notes-Section">
              <header>Your Notes: </header>
              <div className="Notes-Container">
                {props.state.notes.map((note, index) => <NotesList id={index} note={note}/>)}
              </div>
            </div>
          </div>}
        </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    state: state,
  }
}

export default connect(mapStateToProps, { getAllNotes, authUser })(App);
