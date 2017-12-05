import React, { Component } from 'react';
import { login } from "../actions";
import { connect } from 'react-redux';



class Unlocked extends Component {
    
    render() {
        return (
        
            
          
            
            
           
        
            
            <div className='Unlocked'> <iframe src="https://player.vimeo.com/video/97832025" width="300" height="150" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe> Get a Job: Artist </div>
            
          
            
           
            
            
            


       );
    }
    }

function mapStateToProps(state) {
    return {
        loggedInUser:state.loggedInUser,
        

   }
}

export default Unlocked;