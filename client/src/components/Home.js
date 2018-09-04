import React, { Component } from 'react';
import axios from 'axios'
class Home extends Component {
  state = {
    file: {}
  }

  handleChange = e => {
    console.log('DEBUG e.target.files[0]', e.target.files[0]);
    console.log(e.target.files)
    this.setState({
      file: e.target.files[0]
    })
   
  }

  handleSubmit = e => {
    e.preventDefault()
    let fd = new FormData()
    fd.append('photo', this.state.file)
    axios.post(`http://localhost:3000/photo/add`, fd)
    .then(thing => console.log(thing))
    .catch(err => console.log(err))
  }
  render() {                
    return (
      <div className="Home">
        <h2>Home</h2>
        <p>This is a sample project with the MERN stack</p>
        
        <form onSubmit={(e)=>this.handleSubmit(e)}>
          <input type="file" onChange={(e)=>this.handleChange(e)} /> <br/>
          <button type="submit">Save new profile picture</button>
        </form>
        <button onClick={()=>console.log(this.state)}> >check</button>  
      </div>
    );
  }
}

export default Home;