const knex = require('../../utils/knex').instance();

module.exports.createOneCommunityUser = async (req, res) => { // Creates Community Info for one user
  knex('users').select('user_id').where({ email: req.user.email }).then((id) => {
    knex('community_tokens').where({ user_id: id[0].user_id }).then(user => {
      if (user.length) { // User Exists Already
        res.status(500).json({ message: 'User Already Exists!', err: 'Community User Exists' });
      } else { // Makes New User
        knex('community_tokens')
          .insert({
            user_id: id[0].user_id,
            tokens: req.body.tokens,
            locked: req.body.locked,
            tasks: req.body.tasks
          }, ['user_id', 'tokens', 'locked', 'tasks']
          )
          .then((user) => res.status(200).json(user[0]))
          .catch((err) => res.status(500).json({message: 'Something went wrong', error: err}));
      }
    });
  });
};

module.exports.getOneCommunityUser = (req, res) => { // Gets Community Info for one user
  knex('users').select('user_id').where({ email: req.user.email }).then((id) => {
    knex('community_tokens')
      .where({ user_id: id[0].user_id })
      .then((user) => res.status(200).json(user[0]))
      .catch((err) => res.status(500).json({message: 'Something went wrong', error: err}));
  });
};

module.exports.getAllCommunityUsers = (req, res) => { // Gets Community Info for all users
  knex('community_tokens')
    .select('*')
    .then((user) => res.status(200).json(user))
    .catch((err) => res.status(500).json({message: 'Something went wrong', error: err}));
};

module.exports.updateOneCommunityUser = (req, res) => {
  knex('users').select('user_id').where({ email: req.user.email }).then((id) => {
    knex('community_tokens')
      .where({ user_id: id[0].user_id })
      .update({
        tokens: req.body.tokens,
        locked: req.body.locked,
        tasks: req.body.tasks
      }, ['tokens', 'locked', 'tasks']
      )
      .then(user => res.status(200).json(user[0]))
      .catch(err => res.status(500).json({ message: 'Something went wrong', error:err }));
  });
};
