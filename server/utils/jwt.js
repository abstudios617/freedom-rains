const { expressjwt } = require('express-jwt');
const { secret } = require('../config');

module.exports.middleware = () => {
  return expressjwt({ secret, 
    algorithms: ['HS256'],
    getToken: function getTokenFromCookie(req){
      if(!req.cookies.token){
        return null;
      }
      return req.cookies.token;
    }
  }).unless({
    path: [
      // public routes that don't require authentication
      '/', // api homepage
      '/leads/create', // creates one lead
      '/uninstalled/create', // creates an uninstalled user.
      '/scrap/product', // gets product page details.
      '/scrap/price', // gets product price change
      '/users',
      /^\/scrap\/coupon\/.*/, // gets coupons for specific site.
      '/users/create', // creates one user.
      '/users/login', // login user and generate token
      '/checkout/createSession', // guests can purchase items
      '/checkout/subscribe', // create subscription checkout session
      '/webhook', // hit webhook for stripe, will verify from stripe route
      '/users/forgotPassword', // sends an email with temporary password
      '/users/contactUs', // sends contact message to SWF team
      '/users/login', // login user and generate token
      '/products', // gets all products
      /^\/products\/extra\/.*/, // gets extra products by last product id
      /^\/products\/.*/, // gets single product by id
      '/tv/channel',
      /^\/tv\/channel\/.*/,
      /^\/tv\/channel\/subscriptions\/.*/,
      /^\/tv\/channel\/playlists\/.*/,
      /^\/tv\/video\/related\/.*/,
      /^\/tv\/video\/comments\/.*/,
      /^\/tv\/channel\/video\/.*/,
      /^\/tv\/channel\/videos\/.*/,
      '/tv/youtube/videos',
      '/tv/freedomtv',
      '/tv/freedomtv/youtube',
      /^\/tv\/freedomtv\/youtube\/.*/,
      /^\/tv\/freedomtv\/video\/comments\/.*/,
      '/tv/freedomtv',
      '/tv/freedomtv/videos',
      '/tv/freedomtv/video',
      /^\/tv\/freedomtv\/vimeo\/.*/,
      '/tv/freedomtv/vimeo',
      '/tv/freedomtv/videos/creator',
      '/auth/google', // main google login endpoint
      '/auth/google/callback', // google callback
      '/error', // google error
      '/doc' // api documentation
    ],
  });
};