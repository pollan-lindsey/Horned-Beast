import React, { Component } from 'react';
import HornedBeast from './HornedBeast';
import jsonData from './data.json';

export default class Main extends Component {
      constructor(props) {
        super(props)
      
        this.state = {
          imageLiked: false,
        }
      }; 
      //when like is pressed, imageLiked is true
      addLike = () => {
        this.setState({imageLiked: true})
        console.log(this.state.imageLiked)
      }
      // //when like is pressed again, imageLiked is false
      // removeLike = () => {
      //   this.setState({imageLiked: false}), () => console.log(this.state.imageLiked)
      // } 
      //if I figure out how to add two functions to the same image, uncomment this

      render() {
        return (
          jsonData.map(obj => {
            return <HornedBeast title = {obj.title} imageUrl = {obj.image_url} description = {obj.description}/>
          }) 
        
        )
    }
}