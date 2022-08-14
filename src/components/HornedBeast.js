import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
// import Carousel from 'react-bootstrap/Carousel';


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
         // <div>
         // <h2>{this.props.title}</h2>
         // <img onClick={this.handleClicks} src={this.props.imageUrl}  alt='' title={this.props.title} width='420 px' height='350 px'></img>
         // <p> {this.state.likes}Likes</p>
         // <p>{this.props.description}</p>
       
         
         // </div>
         // <div> 
         // <Carousel>
         //    <Carousel.Item>
         //       <img onClick={this.handleClicks} src={this.props.imageUrl}  alt='' title={this.props.title} width='420 px' height='350 px' />
         //       <Carousel.Caption>
         //       <h4>{this.state.likes}Likes</h4>
         //       <h2>{this.props.title}</h2>
         //       <p>{this.props.description}</p>
         //       </Carousel.Caption>
         //    </Carousel.Item>
         // </Carousel>
         // </div>

         <Card border='info' style={{ width: '18rem' }}>
         <Card.Img onClick={this.handleClicks} src={this.props.imageUrl}  alt='' title={this.props.title} width='420 px' height='350 px' />
         <Card.Body>
           <Card.Title>{this.props.title}</Card.Title>
           <Card.Subtitle className="mb-2 text-muted">{this.state.likes}Likes</Card.Subtitle>
           <Card.Text>
             {this.props.description}
           </Card.Text>
         </Card.Body>
       </Card>
      )
   };
}
//on line 8, implement an onClick method