import React, { Component } from 'react';
import { login } from "../actions";
import { connect } from 'react-redux';



class Locked extends Component {
    
    render() {
        return (
        
            
          
            
            
           
        
            
           
            
             <div className='Locked'> <img src={this.props.video.thumbnail} /> {this.props.video.title} </div>
            



 

       );
    }
    }

function mapStateToProps(state) {
    return {
        loggedInUser:state.loggedInUser,
        

   }
}

export default Locked;