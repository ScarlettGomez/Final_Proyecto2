import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class unidaddos extends Component {
  render() {
    return (
      <div className="page">
       <div className="pag">
        <h1>Unidad 2</h1>
        </div>
      <div className="unidaddos">
         <img src={require ('./unidaddos.jpeg')}/>
      </div>
      </div>
    );
  }
}

export default unidaddos;
