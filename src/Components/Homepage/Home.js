import React, {useState} from 'react';
import './Home.css';
import {Carousel, Card} from 'react-bootstrap'
import CarouselMultiple from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Link } from 'react-router-dom';
import {Box, Button } from '@material-ui/core';
import {Rating} from '@material-ui/lab';

import book from '../../assets/book01.png'

const responsive = {
    superLargeDesktop: {
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



function Home() {
    const [products] = useState([{id: 1, title: 'ตัวประกอบสะท้านยุทธภพ', price: 'THB259.00', saleprice: 'THB0.00', book, link: '#', reviews: 1, rating: 4 }, {id: 2, title: 'ตัวประกอบสะท้านยุทธภพ', price: 'THB259.00', saleprice: 'THB129.00', book, link: '#', reviews: 1, rating: 4 }, {id: 3, title: 'ตัวประกอบสะท้านยุทธภพ', price: 'THB259.00', saleprice: 'THB0.00', book, link: '#', reviews: 1, rating: 4 }, {id: 4, title: 'ตัวประกอบสะท้านยุทธภพ', price: 'THB259.00', saleprice: 'THB0.00', book, link: '#', reviews: 1, rating: 4 }, {id: 5, title: 'ตัวประกอบสะท้านยุทธภพ', price: 'THB259.00', saleprice: 'THB0.00', book, link: '#', reviews: 1, rating: 4 }, {id: 6, title: 'ตัวประกอบสะท้านยุทธภพ', price: 'THB259.00', saleprice: 'THB0.00', book, link: '#', reviews: 1, rating: 4 }]);
    const [style, setStyle] = useState({display: 'none', textAlign: 'center', marginBottom: '10px'});

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
                <div className='HeadBox'>
                    <h4 className='Header'>สินค้าขายดี</h4>
                        <Link className='SubHeader' to='#'>ดูสินค้าขายดีทั้งหมด</Link>
                </div>
                <CarouselMultiple responsive={responsive} infinite containerClass="container-with-dots" keyBoardControl draggable renderDotsOutside={false}>
                    {products.map((item, index) => {
                        if (item.saleprice !== 'THB0.00') {
                            return (
                                <div className='sellbox' key={index}>
                                    <Card style={{ width: '13rem' }} className='CardItems' 
                                        onMouseEnter={e => {
                                            setStyle({display: 'block', textAlign: 'center', marginBottom: '10px'});
                                        }}
                                        onMouseLeave={e => {
                                            setStyle({display: 'none', textAlign: 'center', marginBottom: '10px'})}}>
                                        <Card.Img variant="top" src={item.book} />
                                        <Card.Body>
                                        <div className='buybutton' style={style}>
                                            <Button variant="outlined" color="primary" size='small'>Add To Cart</Button>
                                        </div>
                                        <Box component="fieldset" borderColor="transparent" className='ShelfBox'>
                                            <Rating name="read-only" value={item.rating} readOnly size="small" className='Ratebox' />
                                            <p className='reviews'>Reviews({item.reviews})</p>
                                        </Box>
                                        <Card.Title className='TitleCard' as='h5'>{item.title}</Card.Title>
                                        <Card.Text className='normal_price'>{item.price}</Card.Text>
                                        <Card.Text className='Sale_price'>{item.saleprice}</Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                            )
                        }else {
                            return (
                                <div className='sellbox' key={index}>
                                    <Card style={{ width: '13rem' }} className='CardItems' 
                                        onMouseEnter={e => {
                                            setStyle({display: 'block', textAlign: 'center', marginBottom: '10px'});
                                        }}
                                        onMouseLeave={e => {
                                            setStyle({display: 'none', textAlign: 'center', marginBottom: '10px'})}}>
                                        <Card.Img variant="top" src={item.book} />
                                        <Card.Body>
                                        <div className='buybutton' style={style}>
                                            <Button variant="outlined" color="primary" size='small'>Add To Cart</Button>
                                        </div>
                                        <Box component="fieldset" borderColor="transparent" className='ShelfBox'>
                                            <Rating name="read-only" value={item.rating} readOnly size="small" className='Ratebox' />
                                            <p className='reviews'>Reviews({item.reviews})</p>
                                        </Box>
                                        <Card.Title className='TitleCard' as='h5'>{item.title}</Card.Title>
                                        <Card.Text className='price'>{item.price}</Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                            )
                        }
                    })}
                </CarouselMultiple>
            </div>

            <div className='sellbox'>
                <div className='HeadBox'>
                <h4 className='Header'>สินค้าแนะนำ</h4> 
                <Link className='SubHeader' to='#'>ดูสินค้าแนะนำทั้งหมด</Link>
                </div>     
                <CarouselMultiple responsive={responsive} infinite containerClass="container-with-dots" keyBoardControl draggable renderDotsOutside={false}>
                    {products.map((item, index) => {
                        if (item.saleprice !== 'THB0.00') {
                            return (
                                <div className='sellbox' key={index}>
                                    <Card style={{ width: '13rem' }} className='CardItems' 
                                        onMouseEnter={e => {
                                            setStyle({display: 'block', textAlign: 'center', marginBottom: '10px'});
                                        }}
                                        onMouseLeave={e => {
                                            setStyle({display: 'none', textAlign: 'center', marginBottom: '10px'})}}>
                                        <Card.Img variant="top" src={item.book} />
                                        <Card.Body>
                                        <div className='buybutton' style={style}>
                                            <Button variant="outlined" color="primary" size='small'>Add To Cart</Button>
                                        </div>
                                        <Box component="fieldset" borderColor="transparent" className='ShelfBox'>
                                            <Rating name="read-only" value={item.rating} readOnly size="small" className='Ratebox' />
                                            <p className='reviews'>Reviews({item.reviews})</p>
                                        </Box>
                                        <Card.Title className='TitleCard' as='h5'>{item.title}</Card.Title>
                                        <Card.Text className='normal_price'>{item.price}</Card.Text>
                                        <Card.Text className='Sale_price'>{item.saleprice}</Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                            )
                        }else {
                            return (
                                <div className='sellbox' key={index}>
                                    <Card style={{ width: '13rem' }} className='CardItems' 
                                        onMouseEnter={e => {
                                            setStyle({display: 'block', textAlign: 'center', marginBottom: '10px'});
                                        }}
                                        onMouseLeave={e => {
                                            setStyle({display: 'none', textAlign: 'center', marginBottom: '10px'})}}>
                                        <Card.Img variant="top" src={item.book} />
                                        <Card.Body>
                                        <div className='buybutton' style={style}>
                                            <Button variant="outlined" color="primary" size='small'>Add To Cart</Button>
                                        </div>
                                        <Box component="fieldset" borderColor="transparent" className='ShelfBox'>
                                            <Rating name="read-only" value={item.rating} readOnly size="small" className='Ratebox' />
                                            <p className='reviews'>Reviews({item.reviews})</p>
                                        </Box>
                                        <Card.Title className='TitleCard' as='h5'>{item.title}</Card.Title>
                                        <Card.Text className='price'>{item.price}</Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                            )
                        }
                    })}
                </CarouselMultiple>
            </div>
        </div>
    )
}

export default Home;