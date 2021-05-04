module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/myworks/'
    : '/'
  // devServer: { 
  //   proxy: {
  //     '^/api': {
  //       target: 'http://localhost:5000',
  //       changeOringin: true,
  //       logLevel: 'debug',
  //       pathRewrite: { '^/api': '/'}
  //     },
  //   }
  // }
}