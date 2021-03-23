import React, { useState } from "react";
import "./Home.css";
import { Carousel } from "react-bootstrap";
import CarouselMultiple from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
// import { Box, Button } from "@material-ui/core";
// import { Rating } from "@material-ui/lab";

import book from "../../assets/book01.png";
import Product from "./Product";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

function Home() {
  const [products] = useState([
    {
      id: 1,
      title: "ตัวประกอบสะท้านยุทธภพ",
      price: "THB259.00",
      saleprice: "THB0.00",
      imagebook: book,
      link: "/book01",
      reviews: 1,
      rating: 4,
      discription: "",
    },
    {
      id: 2,
      title: "ตัวประกอบสะท้านยุทธภพ",
      price: "THB259.00",
      saleprice: "THB129.00",
      imagebook: book,
      link: "#",
      reviews: 1,
      rating: 4,
      discription: "",
    },
    {
      id: 3,
      title: "ตัวประกอบสะท้านยุทธภพ",
      price: "THB259.00",
      saleprice: "THB0.00",
      imagebook: book,
      link: "#",
      reviews: 1,
      rating: 4,
      discription: "",
    },
    {
      id: 4,
      title: "ตัวประกอบสะท้านยุทธภพ",
      price: "THB259.00",
      saleprice: "THB0.00",
      imagebook: book,
      link: "#",
      reviews: 1,
      rating: 4,
      discription: "",
    },
    {
      id: 5,
      title: "ตัวประกอบสะท้านยุทธภพ",
      price: "THB259.00",
      saleprice: "THB0.00",
      imagebook: book,
      link: "#",
      reviews: 1,
      rating: 4,
      discription: "",
    },
    {
      id: 6,
      title: "ตัวประกอบสะท้านยุทธภพ",
      price: "THB259.00",
      saleprice: "THB0.00",
      imagebook: book,
      link: "#",
      reviews: 1,
      rating: 4,
      discription: "",
    },
  ]);

  return (
    <div>
      {/* Carousel Image */}
      <Carousel className="ImgItems">
        <Carousel.Item>
          <img
            className="Img"
            src="https://source.unsplash.com/random?sig=$01"
            alt="First slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="Img"
            src="https://source.unsplash.com/random?sig=$09"
            alt="Second slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="Img"
            src="https://source.unsplash.com/random?sig=$40"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>

      {/* Multiple Card select */}
      {/* Top Selling */}
      <div className="sellbox">
        <div className="HeadBox">
          <h4 className="Header">สินค้าขายดี</h4>
          <Link className="SubHeader" to="#">
            ดูสินค้าขายดีทั้งหมด
          </Link>
        </div>
        <CarouselMultiple
          responsive={responsive}
          infinite
          containerClass="container-with-dots"
          keyBoardControl
          draggable
        >
          {products.map((product) => {
            return <Product data={product} />;
          })}
        </CarouselMultiple>
      </div>

      {/* Recommend Products */}
      <div className="sellbox">
        <div className="HeadBox">
          <h4 className="Header">สินค้าแนะนำ</h4>
          <Link className="SubHeader" to="#">
            ดูสินค้าแนะนำทั้งหมด
          </Link>
        </div>
        <CarouselMultiple
          responsive={responsive}
          infinite
          containerClass="container-with-dots"
          keyBoardControl
          draggable
        >
          {products.map((product) => {
            return <Product data={product} />;
          })}
        </CarouselMultiple>
      </div>
    </div>
  );
}

export default Home;
