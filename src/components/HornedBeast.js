import React, { Component } from 'react';

export default class HornedBeast extends Component {
   constructor(props) {
      super(props);
    
      this.state = {
        likes: 0,
      }
    }; 
    
    //when image is clicked, add one and add heart
    handleClicks = () => {
      
      this.setState((prev) => ({
         likes: prev.likes + 1
      }))
      // console.log('handle clicks');
    }

   //  console() {
   //    return(
   //       console.log('anything')
   //    )
      
   //  }

   render() {
      return (
         <div>
         <h2>{this.props.title}</h2>
         <img onClick={this.handleClicks} src={this.props.imageUrl}  alt='' title={this.props.title}></img>
         <p> {this.state.likes} Likes</p>
         <p>{this.props.description}</p>
         {/* <h2 onClick={this.console}>click</h2>
         <button onClick={this.console()}>
         {/* <img  alt={this.props.title} /> */}
         {/* </button>  */} 
         
         </div>
      )
   };
}
//on line 8, implement an onClick method