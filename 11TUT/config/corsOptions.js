const allowedOrigins = require("./allowedOrigins");

const corsOptions = {
  origin: (origin, callback) => {
    // if the domain is in the witelist, then we'll let it pass
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      // null is usually the error
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  optionsSuccessStatus: 200,
};

module.exports = corsOptions;
