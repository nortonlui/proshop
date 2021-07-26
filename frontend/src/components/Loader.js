import React from 'react';
import { Spinner } from 'react-bootstrap';

// Inline Style
const style = {
  width: '100px',
  height: '100px',
  margin: 'auto',
  display: 'block',
};

const Loader = () => {
  return (
    <Spinner animation="border" role="status" style={style}>
      <span class="sr-only">Loading...</span>
    </Spinner>
  );
};

export default Loader;
