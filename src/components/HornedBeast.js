import React, { Component } from 'react';

export default class HornedBeast extends Component {
   render() {
      return (
         <>
         <h2>{this.props.title}</h2>
         <img src={this.props.image_url}  alt='' title={this.props.title}></img>
         <p>{this.props.description}</p>
         </>
      )
   };
}
