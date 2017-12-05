//import React, { Component } from 'react';
//import { login } from "../actions";
//import { connect } from 'react-redux';
//
//
//
//class Profile extends Component {
//    
//    render() {
//        return (
//        
//            
//          <div className='Profile_div'>
//            
//            
//           
//        <div className='Profile'> Profile </div>
//            
//            <div className='Welcome'> Welcome, Person! </div>
//            
//            
//            <div> <img className='Photo' src={this.props.loggedInUser.img}  /> </div>
//            
//            
//            <div><ol className='List'>
//            <li>Email: {this.props.loggedInUser.email}</li>
//            <li>Phone Number: {this.props.loggedInUser.phone}</li>
//            <li>Location: {this.props.loggedInUser.location}</li></ol>
//            
//            </div>
//            
//            <div className='Edit'> <a href='#' className='edit_link'> Edit Profile </a> </div>
//            
//            
//            </div>
//            
//            
//        
//    
//
//        
//        );
//    }
//    }
//
//function mapStateToProps(state) {
//    return {
//        loggedInUser:state.loggedInUser,
//        
//
//    }
//}
//
//export default connect(mapStateToProps)(Profile);
