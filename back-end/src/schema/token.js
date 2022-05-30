require('dotenv').config();
const fs = require('fs');

const { sign } = require('jsonwebtoken');

const SECRET = fs.readFileSync('jwt.evaluation.key', 'utf8');

module.exports = (payload) => {
  const token = sign(payload, SECRET, {
    algorithm: 'HS256',
    expiresIn: '10d',
  });

  return token;
};