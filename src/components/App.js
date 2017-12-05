import React, { Component } from 'react';
import Profile from './Profile';
import SignIn from './SignIn';
import Locked from './Locked';
import Unlocked from './Unlocked';
import { connect } from 'react-redux';

const videoData = {
        url: "https://player.vimeo.com/video/75023672", thumbnail: 'images/thumbnail05.png', locked: true,
        title: "Get a Job: Actor"
    };



class App extends Component {
  render() {
    return (
      <div className="App">
        
        <div className='Getajob'> GET A JOB </div>
            
            <div className='Summary'> Summary Here... </div>
       
        <SignIn /> 
        <div className="videos">
        <Unlocked /> 
        <Locked video={videoData} /> 
            
        </div>
       
      </div>
        
        
    );
  }
    
    
}

//function mapStateToProps(state) {
//    return {
//        loggedInUser:state.loggedInUser,
//        
//
//    }
//}

export default App;
