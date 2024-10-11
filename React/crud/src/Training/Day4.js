import React, { Component } from 'react'

export default class Day4 extends Component {
    constructor(){
        super()
        this.state = {
            fname:'',
            email:'',
            ph:'',
            // userData:[]
        }
      
    }

    handlechange =(e)=>{
          
           const{name,value}= e.target
           this.setState(pre=>({...pre , [name]:value}))
    }

    handleSubmit = (e)=>{
      e.preventDefault()     
      console.log('state value',this.state)
    }
  render() {
    return (
      <div>
          <form onSubmit={this.handleSubmit}>
              <label>Fname:</label>
          <input type="text" name="fname" onChange={this.handlechange}></input> <br></br>
          <label>Email:</label>
          <input type="email"  name="email" onChange={this.handlechange} ></input><br></br>
          <label>PH:</label>
          <input type="number"  name="ph" onChange={this.handlechange} value={this.state.ph}></input><br></br>
          <input type="submit"></input>
          </form>
        
      </div>
      
    )
  }
}

