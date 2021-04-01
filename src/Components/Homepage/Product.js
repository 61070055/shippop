import React, { Component } from "react";
import "./Home.css";
import { Card } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
import { Box, Button } from "@material-ui/core";
import { Rating } from "@material-ui/lab";

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: props.data,
      isonsale: false,
      isHovering: false,
    };
  }

  handleMouseHover = () => {
    this.setState(this.toggleHoverState);
  };

  toggleHoverState() {
    return {
      isHovering: !this.state.isHovering,
    };
  }

  componentDidMount() {
    if (this.state.products.saleprice !== "THB0.00") {
      this.setState({ isonsale: true });
    }
  }

  render() {
    return (
      <div
        className="sellbox"
        onMouseEnter={this.handleMouseHover}
        onMouseLeave={this.handleMouseHover}
      >
        <Card style={{ width: "13rem" }} className="CardItems">
          <Card.Img
            variant="top"
            src={this.state.products.imagebook}
            style={{ cursor: "pointer" }}
          />
          <Card.Body>
            {this.state.isHovering ? (
              <div
                className="buybutton"
                style={{ textAlign: "center", marginBottom: "5px" }}
              >
                <Link
                  className="SubHeader"
                  to={this.state.products.link + `/${this.state.products.id}`}
                >
                  <Button variant="outlined" color="primary" size="small">
                    Add To Cart
                  </Button>
                </Link>
              </div>
            ) : (
              <></>
            )}
            <Box
              component="fieldset"
              borderColor="transparent"
              className="ShelfBox"
            >
              <Rating
                name="read-only"
                value={this.state.products.rating}
                readOnly
                size="small"
                className="Ratebox"
              />
              <p className="reviews">Reviews({this.state.products.reviews})</p>
            </Box>
            <Card.Title className="TitleCard" as="h5">
              {this.state.products.title}
            </Card.Title>
            <Card.Text className="normal_price">
              {this.state.products.price}
            </Card.Text>
            {this.state.isonsale ? (
              <Card.Text className="Sale_price">
                {this.state.products.saleprice}
              </Card.Text>
            ) : (
              <></>
            )}
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default Product;
