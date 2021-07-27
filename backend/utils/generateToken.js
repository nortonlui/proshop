import jwt from 'jsonwebtoken';

const generateToken = (id) => {
  const tokenOptions = {
    expiresIn: '30d',
  };

  return jwt.sign({ id }, process.env.JWT_SECRET, tokenOptions);
};

export default generateToken;
