const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.token;
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.JWT_SEC, (err, user) => {
      if (err) {
        res.status(403).json("Token is not valid!");
      } else {
        req.user = user;
        next();
      }
    });
  } else {
    res.status(401).json("you are not authenticated!");
  }
};

const verifyTokenAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      res.status(403).json("you are not alowed to do that!");
    }
  });
};

const verifyTokenAndAuthorization = (req, res, next) => {
  verifyToken(req, res, () => {
      if(req.user._id === req.params.id|| req.user.isAdmin) {
            next();
      }else {
        res.status(403).json("you are not alowed to do that!");
      }
  });
};

module.exports = { verifyToken, verifyTokenAdmin, verifyTokenAndAuthorization };
