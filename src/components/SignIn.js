import React, { Component } from 'react';
//import { login } from "../actions";
import { connect } from 'react-redux';



class SignIn extends Component {
    constructor(props){
    super(props);
    this.state = {
      username: "",
      creditcard: ""
      
    }
  }

    
    render() {
        return (
        <form className='SignIn' onSubmit={this.handleSubmit.bind(this)}>
            
            <div className='SignInSign'>
            Documentary Store
        
            </div>

<div className='thirty'>
            33&#162; for unlimited plays
            </div>
            
            <div className='Username'>
               <input type="text"  className='username_input' value={this.state.username}
            placeholder="full name"
            onChange={this.handleUsernameChange.bind(this)}/> 
             </div>
            
            <div className='Creditcard'>
            <input type="creditcard" className='creditcard_input' value={this.state.creditcard} placeholder="credit card" 
           onChange={this.handleCreditcardChange.bind(this)} />
             </div>
            
            <div className='SubmitSign'>
            <button className='signin_input'> Place Purchase </button>
             </div>
            

            
            
            
            </form>
        
        );
    }
            
            
            handleCreditcardChange(event) {
    this.setState({
        creditcard: event.target.value
    });
}

  handleUsernameChange(event) {
    this.setState({
        username: event.target.value
    });
}

handleSubmit(event) {
    event.preventDefault()
//    this.props.login(this.state.username, this.state.creditcard)
}

}
            
            
//const mapActionsToProps = {
//    login
//}
export default SignIn;
