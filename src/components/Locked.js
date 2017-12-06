import React, { Component } from 'react';
import { popup } from "../actions";
import { connect } from 'react-redux';
 


class Locked extends Component {
    
    render() {
        return (
        
            
          
            
            
           
        
            
           
            
             <div className='Locked'> <img src={this.props.video.thumbnail}  
            onClick={this.handleClick.bind(this)}
            /> <div> {this.props.video.title} </div> </div>
            
            
            



 

       );
    }
    
    handleClick() {
        console.log(this.props.video.number)
        this.props.popup(this.props.video.number);
    }
    }

const mapActionsToProps={popup}
export default connect (null, mapActionsToProps) (Locked);