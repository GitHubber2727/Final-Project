import React, { Component } from 'react';
import { pay } from "../actions";
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
               <input type="text" maxlength="100"  className='username_input' value={this.state.username}
            placeholder="full name"
            onChange={this.handleUsernameChange.bind(this)}/> 
             </div>
            
            <div className='Creditcard'>
            <input type="number" maxlength="19" className='creditcard_input' value={this.state.creditcard} placeholder="credit card" 
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
    this.props.pay()
}

}
            
            
const mapActionsToProps = {
    pay
}
export default connect (null, mapActionsToProps)(SignIn);
