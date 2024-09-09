const loggerMiddleware = (req, res, next) => {
    const timestamp = new Date();
    console.log(`${timestamp.toLocaleString()} - ${req.method} ${req.url}`);
    next();
  };
  
  module.exports = loggerMiddleware;