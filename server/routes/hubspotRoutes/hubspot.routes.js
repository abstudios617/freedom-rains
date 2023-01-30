const { createHubspotContact, getHubspotContacts } = require('./../../controllers/hubspotController/hubspot.controller');

module.exports = (app) => {
  app.post('/hubspot/contacts/create', createHubspotContact);
  app.get('/hubspot/contacts', getHubspotContacts);
};
