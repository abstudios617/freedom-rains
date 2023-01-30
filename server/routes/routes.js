const leadsRoutes = require('./leadsRoutes/leads.route');
const userRoutes = require('./userRoutes/user.route');
const uninstallRoutes = require('./uninstalledRoutes/uninstall.route');
const productRoutes = require('./productRoutes/product.route');
const scrapRoutes = require('./scrapRoutes/scrap.route');
const gamingRoutes = require('./gamingRoutes/gaming.route');
const googleRoutes = require('./googleRoutes/google.routes');
const checkoutRoutes = require('./checkoutRoutes/checkout.routes.js');
const communityRoutes = require('./communityRoutes/community.route.js');

// External Services...
const hubspotRoutes = require('./hubspotRoutes/hubspot.routes');

//single file for routes so index isn't cluttered
module.exports = (app) =>{
  leadsRoutes(app); //leads routes
  userRoutes(app); //user routes
  uninstallRoutes(app); //uninstalled routes 
  productRoutes(app); //product routes
  scrapRoutes(app); //scrap routes
  gamingRoutes(app); //gaming routes
  googleRoutes(app); //google routes
  checkoutRoutes(app); //checkout routes
  communityRoutes(app); //community routes
  hubspotRoutes(app); // hubspot routes
};
