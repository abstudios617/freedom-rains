const hs = require('@hubspot/api-client');

const getClient = () => {
  return new hs.Client({
    accessToken: process.env.REACT_APP_HS_TOKEN
    //NOT WORKING => accessToken: hubspot.token,
  });
};

module.exports.createHubspotContact = async (req, res) => {
  try {
    const client = getClient(),
      properties = req.body;
    const ContactProps = { properties };

    const apiRes = await client.crm.contacts.basicApi.create(ContactProps);
    return res.status(200).json(apiRes);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

module.exports.getHubspotContacts = async (req, res) => {
  const client = getClient(),
    limit = 10,
    after = undefined,
    props = undefined,
    propsWithHistory = undefined,
    associations = undefined,
    archived = false;
    
  try {
    const apiRes = await client.crm.contacts.basicApi.getPage(
      limit, after, props, propsWithHistory, associations, archived
    );
    return res.status(200).json({ data: apiRes });
  } catch (err) {
    res.status(500).json({ error: err.message });
    console.error(err);
  }
};
