import React, { Component } from 'react';
import SignIn from './SignIn';
import Locked from './Locked';
import Unlocked from './Unlocked';
import { connect } from 'react-redux';

//const videoData = {
//        url: "https://player.vimeo.com/video/75023672", thumbnail: 'images/thumbnail05.png', locked: true,
//        title: "Get a Job: Actor", number: 5
//    };



class App extends Component {
  render() {
    return (
      <div className="App">
        
        <div className='Getajob'> GET A JOB </div>
            
            <div className='Summary'> 'Get a Job' is a video series profiling working professionals in a wide array of industries.  </div>
        
        {
        this.props.popupVideoNumber ?
        <SignIn /> :
        null
        }

        <div className="videos">
        <ul>
            {
                this.props.videos.map ((video => {
        
            if (video.locked) {
        return <li key={video.number}><Locked video={video} /></li>;
    
    }
        else {
            return <li key={video.number}><Unlocked video={video} /></li>
        }
        
        }

    ))
            }
            </ul>
        </div>
       
      </div>
        
        
    );
  }
    
    
}

function mapStateToProps(state) {
    return {
        popupVideoNumber:state.popupVideoNumber,
        videos: state.videos
        

    }
}


export default connect (mapStateToProps)(App);
