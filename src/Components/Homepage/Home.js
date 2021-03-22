import React, {Component} from 'react';
import './Home.css';
import Carousel from 'react-bootstrap/Carousel'
import CarouselMultiple from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    },
  };

class Home extends Component {
    render(){
        return (
            <div>
                {/* Carousel Image */}
                <Carousel className='ImgItems'>
                <Carousel.Item>
                    <img className="Img" src="https://source.unsplash.com/random?sig=$1" alt="First slide"/>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                    className="Img" src="https://source.unsplash.com/random?sig=$21" alt="Second slide"/>
                </Carousel.Item>

                <Carousel.Item>
                    <img className="Img" src="https://source.unsplash.com/random?sig=$28" alt="Third slide"/>
                </Carousel.Item>
                </Carousel>

                {/* Multiple Card select */}
                <div className='BestSell'>
                    <h5 className='Header'>สินค้าขายดี</h5>
                    <CarouselMultiple responsive={responsive} infinite containerClass="container-with-dots" keyBoardControl draggable renderDotsOutside={false}>
                        <div>1</div>
                        <div>Item 2</div>
                        <div>Item 3</div>
                        <div>Item 4</div>
                        <div>Item 5</div>
                        <div>Item 6</div>
                    </CarouselMultiple>
                </div>
            </div>
        )
    }
}

export default Home;