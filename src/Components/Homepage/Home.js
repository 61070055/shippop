import React, {Component} from 'react';
import './Home.css';
import {Carousel, Card, Button} from 'react-bootstrap'
import CarouselMultiple from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import book from '../../assets/book01.png'

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
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
                    <img className="Img" src="https://source.unsplash.com/random?sig=$01" alt="First slide"/>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                    className="Img" src="https://source.unsplash.com/random?sig=$09" alt="Second slide"/>
                </Carousel.Item>

                <Carousel.Item>
                    <img className="Img" src="https://source.unsplash.com/random?sig=$40" alt="Third slide"/>
                </Carousel.Item>
                </Carousel>

                {/* Multiple Card select */}
                <div className='sellbox'>
                    <h5 className='Header'>สินค้าขายดี</h5>
                    <CarouselMultiple responsive={responsive} infinite containerClass="container-with-dots" keyBoardControl draggable renderDotsOutside={false}>
                        <div className='Itemboxs'>
                        <Card style={{ width: '13rem' }}>
                            <Card.Img variant="top" src={book} />
                            <Card.Body>
                                <Card.Title>ตัวประกอบสะท้านยุทธภพ</Card.Title>
                                <Card.Text className='normal_price'>
                                THB279.00
                                </Card.Text>
                                <Card.Text className='Sale_price'>
                                THB129.00
                                </Card.Text>
                                <Button variant="success">Buy</Button>
                            </Card.Body>
                        </Card>
                        </div>
                        <div className='Itemboxs'>
                        <Card style={{ width: '13rem' }}>
                            <Card.Img variant="top" src={book} />
                            <Card.Body>
                                <Card.Title>ตัวประกอบสะท้านยุทธภพ</Card.Title>
                                <Card.Text className='normal_price'>
                                THB279.00
                                </Card.Text>
                                <Card.Text className='Sale_price'>
                                THB129.00
                                </Card.Text>
                                <Button variant="success">Buy</Button>
                            </Card.Body>
                        </Card>
                        </div>
                        <div className='Itemboxs'>
                        <Card style={{ width: '13rem' }}>
                            <Card.Img variant="top" src={book} />
                            <Card.Body>
                                <Card.Title>ตัวประกอบสะท้านยุทธภพ</Card.Title>
                                <Card.Text className='normal_price'>
                                THB279.00
                                </Card.Text>
                                <Card.Text className='Sale_price'>
                                THB129.00
                                </Card.Text>
                                <Button variant="success">Buy</Button>
                            </Card.Body>
                        </Card>
                        </div>
                        <div className='Itemboxs'>
                        <Card style={{ width: '13rem' }}>
                            <Card.Img variant="top" src={book} />
                            <Card.Body>
                                <Card.Title>ตัวประกอบสะท้านยุทธภพ</Card.Title>
                                <Card.Text className='normal_price'>
                                THB279.00
                                </Card.Text>
                                <Card.Text className='Sale_price'>
                                THB129.00
                                </Card.Text>
                                <Button variant="success">Buy</Button>
                            </Card.Body>
                        </Card>
                        </div>
                        <div className='Itemboxs'>
                        <Card style={{ width: '13rem' }}>
                            <Card.Img variant="top" src={book} />
                            <Card.Body>
                                <Card.Title>ตัวประกอบสะท้านยุทธภพ</Card.Title>
                                <Card.Text className='normal_price'>
                                THB279.00
                                </Card.Text>
                                <Card.Text className='Sale_price'>
                                THB129.00
                                </Card.Text>
                                <Button variant="success">Buy</Button>
                            </Card.Body>
                        </Card>
                        </div>
                    </CarouselMultiple>
                </div>

                <div className='sellbox'>
                    <h5 className='Header'>สินค้าแนะนำ</h5>
                    <CarouselMultiple responsive={responsive} infinite containerClass="container-with-dots" keyBoardControl draggable renderDotsOutside={false}>
                    <div className='Itemboxs'>
                        <Card style={{ width: '13rem' }}>
                            <Card.Img variant="top" src={book} />
                            <Card.Body>
                                <Card.Title>ตัวประกอบสะท้านยุทธภพ</Card.Title>
                                <Card.Text className='normal_price'>
                                THB279.00
                                </Card.Text>
                                <Card.Text className='Sale_price'>
                                THB129.00
                                </Card.Text>
                                <Button variant="success">Buy</Button>
                            </Card.Body>
                        </Card>
                        </div>
                        <div className='Itemboxs'>
                        <Card style={{ width: '13rem' }}>
                            <Card.Img variant="top" src={book} />
                            <Card.Body>
                                <Card.Title>ตัวประกอบสะท้านยุทธภพ</Card.Title>
                                <Card.Text className='normal_price'>
                                THB279.00
                                </Card.Text>
                                <Card.Text className='Sale_price'>
                                THB129.00
                                </Card.Text>
                                <Button variant="success">Buy</Button>
                            </Card.Body>
                        </Card>
                        </div>
                        <div className='Itemboxs'>
                        <Card style={{ width: '13rem' }}>
                            <Card.Img variant="top" src={book} />
                            <Card.Body>
                                <Card.Title>ตัวประกอบสะท้านยุทธภพ</Card.Title>
                                <Card.Text className='normal_price'>
                                THB279.00
                                </Card.Text>
                                <Card.Text className='Sale_price'>
                                THB129.00
                                </Card.Text>
                                <Button variant="success">Buy</Button>
                            </Card.Body>
                        </Card>
                        </div>
                        <div className='Itemboxs'>
                        <Card style={{ width: '13rem' }}>
                            <Card.Img variant="top" src={book} />
                            <Card.Body>
                                <Card.Title>ตัวประกอบสะท้านยุทธภพ</Card.Title>
                                <Card.Text className='normal_price'>
                                THB279.00
                                </Card.Text>
                                <Card.Text className='Sale_price'>
                                THB129.00
                                </Card.Text>
                                <Button variant="success">Buy</Button>
                            </Card.Body>
                        </Card>
                        </div>
                        <div className='Itemboxs'>
                        <Card style={{ width: '13rem' }}>
                            <Card.Img variant="top" src={book} />
                            <Card.Body>
                                <Card.Title>ตัวประกอบสะท้านยุทธภพ</Card.Title>
                                <Card.Text className='normal_price'>
                                THB279.00
                                </Card.Text>
                                <Card.Text className='Sale_price'>
                                THB129.00
                                </Card.Text>
                                <Button variant="success">Buy</Button>
                            </Card.Body>
                        </Card>
                        </div>
                    </CarouselMultiple>
                </div>
            </div>
        )
    }
}

export default Home;