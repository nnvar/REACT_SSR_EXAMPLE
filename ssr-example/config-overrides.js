const path = require('path-browserify');

module.exports = function override(config) {
  config.resolve = {
    ...config.resolve,
    fallback: {
      ...config.resolve.fallback,
      path: require.resolve('path-browserify'),
      http: require.resolve('stream-http'),
      net: require.resolve('net-browserify'),
      querystring: require.resolve('querystring-es3'),
      fs: false, // or handle as needed
      url: require.resolve('url/'),
      buffer: require.resolve('buffer/'),
      crypto: false,
      util: false, 
      stream: false,
      zlib: false,
    },
  };

  return config;
};

//https://youtu.be/00odfwhjoXU?t=1754
