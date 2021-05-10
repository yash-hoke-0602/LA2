import React, { Component } from 'react';

class RegisterForm extends Component {
    state = { 
        name:'',
        adharNum:'',
        mobile:'',
        PHCCity:''
     }

     
     onChangeName = (e) =>{
        this.setState({name:e.target.value});
    }
    
    onChangeAdhar = (e) =>{
        this.setState({adharNum:e.target.value});
    }
    
    onChangeMobNum = (e) =>{
        this.setState({mobile:e.target.value});
    }
    
    onChangeCity = (e) =>{
        this.setState({PHCCity:e.target.value});
    }

     handleSubmit = (e) =>{
         e.preventDefault();
         console.log(this.state.name);
         console.log(this.state.adharNum);
         console.log(this.state.mobile);
         console.log(this.state.PHCCity);
     }

    render() { 
        return (
            <div>
                <form>
                    <input type="text" placeholder="Enter Name" onChange={this.onChangeName}/>
                    <br/>
                    <input type="text" placeholder="Enter adhar No." onChange={this.onChangeAdhar}/>
                    <br/>
                    <input type="text" placeholder="Enter Mobile No." onChange={this.onChangeMobNum}/>
                    <br/>
                    <input type="text" placeholder="Enter PHC city" onChange={this.onChangeCity}/>
                    <br/>
                    <button type="submit" onClick={this.handleSubmit} >Submit</button>
                    
                </form>
            </div>
          );
    }
}
 
export default RegisterForm;