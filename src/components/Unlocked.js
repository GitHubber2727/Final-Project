import React, { Component } from 'react';

class Unlocked extends Component {
    
    render() {
        return (
        
            
          
            
            
           
        
            
            <div className='Unlocked'>
                <iframe src={this.props.video.url} frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
                <div> {this.props.video.title} </div>
            </div>
            
//            <div className='Unlocked'> <img src={this.props.video.url}  
//            onClick={this.handleClick.bind(this)}
//            /> {this.props.video.title} </div>
            
          
            
           
            
            
            


       );
    }
    }

export default Unlocked;