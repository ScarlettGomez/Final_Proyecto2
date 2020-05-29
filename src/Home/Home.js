import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <div className="page">
       <div className="pag">
        <h1>Home</h1>
        </div>
      <div className="infografiauna">
         <img src={require ('./portada.jpeg')}/>
      </div>
      </div>
    );
  }
}

export default Home;
