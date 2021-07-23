import React from 'react';
import { Card } from 'react-bootstrap';
import Rating from './Rating';
import { Link } from 'react-router-dom';

const Product = (props) => {
  const {
    product: { _id, name, image, price, rating, numReviews },
  } = props;
  return (
    <Card className="my-3 p-3 rounded">
      <Link to={`/product/${_id}`}>
        <Card.Img src={image} variant="top" />
      </Link>
      <Card.Body>
        <Link to={`/product/${_id}`}>
          <Card.Title as="div">
            <strong>{name}</strong>
          </Card.Title>
        </Link>
        <Card.Text as="div">
          <Rating value={rating} text={`${numReviews} reviews`} />
        </Card.Text>
        <Card.Text as="h3">${price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
