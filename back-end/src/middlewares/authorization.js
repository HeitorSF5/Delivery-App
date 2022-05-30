const fs = require('fs');
const { verify } = require('jsonwebtoken');

const SECRET = fs.readFileSync('jwt.evaluation.key', 'utf8');

const verifyAuthorization = (req, res, next) => {
  const { authorization } = req.headers;
  // console.log('\n\nthis is the authorization:', authorization);

  if (!authorization) return res.status(401).json({ message: 'Token not found' });

  try {
    verify(authorization, SECRET);
  } catch (_) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }

  next();
};

module.exports = verifyAuthorization;
