import React, { Component } from 'react';

export default class HornedBeast extends Component {
   render() {
      return (
         <>
         <h2>{this.props.title}</h2>
         <img onClick={() => this.props.addLike} src={this.props.imageUrl}  alt='' title={this.props.title}></img>
         <p>{this.props.description}</p>
         </>
      )
   };
}
//on line 8, implement an onClick method