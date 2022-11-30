const knex = require('../../utils/knex').instance();

module.exports.getGameplay = (req, res) => {
    knex('gameplay_data')
        .select('*')
        .then((allGameplay) => res.status(200).json(allGameplay))
        .catch(err => res.status(500).json(err));
};

module.exports.addGameplay = (info, res) => { 
    const { game_name, user_name, score, level, bubbles_shot,
	    beat_own_high_score, beat_all_high_score } = info.body;
    knex('gameplay_data')
        .insert({
            game_name: game_name,
            user_name: user_name,
            score: score,
            level: level,
            bubbles_shot: bubbles_shot,
            beat_own_high_score: beat_own_high_score,
            beat_all_high_score: beat_all_high_score,
        }, [
            'gameplay_id', 'game_name', 'user_name', 'score', 'level',
            'bubbles_shot', 'beat_own_high_score', 'beat_all_high_score',
            'recorded_on'
        ])
        .then(gameplay => res.status(200).json(gameplay[0]))
        .catch(err => res.status(500).json(err));
};

module.exports.deleteGameplay = (req, res) => {
    knex('gameplay_data')
        .where({ gameplay_id: req.params.id })
        .del()
        .then((delUser) => res.status(200).json(delUser))
        .catch(err => res.status(500).json(err));
};
