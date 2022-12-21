import React, { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import trees from '../../assets/autumn-trees.jpeg'
import iceland from '../../assets/iceland_waterfall.jpg'
import forest from '../../assets/forest.jpg'





function Jumbotron() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
    return (
        <div className='imageCarousel'>
        <Carousel  activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item interval={10000}>
          <img
            className="d-block w-100"
            src={trees}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3 style={{fontFamily: 'Lobster'}}>Carl Sagan</h3>
            <p>"Preserve and cherish the pale blue dot, it's the only home we've ever known."</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={iceland}
            alt="Second slide"
          />
  
          <Carousel.Caption>
            <h3 style={{fontFamily: 'Lobster'}} >Gary Snyder</h3>
            <p>“Nature is not a place to visit. It is home.”</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={forest}
            alt="Third slide"
          />
  
          <Carousel.Caption >
            <h3 style={{fontFamily: 'Lobster'}}>Lady Bird Johnson</h3>
            <p >
            “The environment is where we all meet; where all have a mutual interest; it is the one thing all of us share.”
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </div>
    );
  }

export default Jumbotron
