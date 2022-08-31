const leadsRoutes = require('./leadsRoutes/leads.route');
const userRoutes = require('./userRoutes/user.route');
const uninstallRoutes = require('./uninstalledRoutes/uninstall.route');
const productRoutes = require('./productRoutes/product.route');
const scrapRoutes = require('./scrapRoutes/scrap.route');
const gamingRoutes = require('./gamingRoutes/gaming.route');
const googleRoutes = require('./googleRoutes/google.routes');
const youtubeRoutes = require('./tvRoutes/youtube.routes');
const vimeoRoutes = require('./tvRoutes/vimeo.routes')

//single file for routes so index isn't cluttered
module.exports = (app) =>{
  leadsRoutes(app);
  userRoutes(app); 
  uninstallRoutes(app); 
  productRoutes(app); 
  scrapRoutes(app); 
  gamingRoutes(app);
  googleRoutes(app);
  youtubeRoutes(app); 
  vimeoRoutes(app); 
};