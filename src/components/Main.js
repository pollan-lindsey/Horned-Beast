import React, { Component } from 'react';
import HornedBeast from './HornedBeast';
import jsonData from './data.json';

export default class Main extends Component {
    render() {
        return (
          jsonData.map(obj => {
            return <HornedBeast title = {obj.title} imageUrl = {obj.image_url} description = {obj.description}/>
          }) 
        
        )
    }
}