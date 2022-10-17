const Vimeo = require('vimeo').Vimeo;
const { vimeo , vimeo_client, vimeo_secret } = require('../../config')
const client = new Vimeo(vimeo_client, vimeo_secret, vimeo)
const knex = require('../../utils/knex').instance();

// Add a video
module.exports.addVideo = (req, res) => {
    knex('freedomtv_vimeo')
      .insert(
          { video_link : req.body.video_link,
            video_title: req.body.video_title,
            created_on : req.body.created_on,
            duration: req.body.duration,
            like_count: req.body.like_count,
            video_count: req.body.video_count,
            thumbnail_link: req.body.thumbnail_link,
        },
        ['video_link', 'video_title', 'created_on', 'duration', 'like_count', 'video_count', 'thumbnail_link'])
      .then((video) => res.status(200).json(video))
      .catch((err) => res.status(500).json(err));
};

// Delete a video
module.exports.deleteVideo = (req, res) => {
    knex('freedomtv_vimeo')
      .where({ video_link : req.params.link })
      .del()
      .then((video) => res.status(200).json(video))
      .catch((err) => res.status(500).json(err));
};

//update a video
module.exports.updateVideo = (req, res) => {
    knex('freedomtv_vimeo')
      .where({video_link: req.params.link})
      .update(
          { video_link : req.body.video_link,
            video_title: req.body.video_title,
            created_on : req.body.created_on,
            duration: req.body.duration,
            like_count: req.body.like_count,
            video_count: req.body.video_count,
            thumbnail_link: req.body.thumbnail_link,
        },
        ['video_link', 'video_title', 'created_on', 'duration', 'like_count', 'video_count', 'thumbnail_link'])
      .then((video) => res.status(200).json(video))
      .catch((err) => res.status(500).json(err));
};

// Get a video
module.exports.getVideos = (req, res) => {
    knex('freedomtv_vimeo')
      .select('*')
      .then((videos) => res.status(200).json({  Videos: videos }))
      .catch((err) => res.status(500).json({ message: 'Something went wrong', error: err })
      );
  };
  
  //Get one lead by id
  module.exports.getVideo = (req, res) => {
    knex('freedomtv_vimeo')
      .where({'video_link' : req.params.link})
      .then((lead) => res.status(200).json(lead))
      .catch((err) => res.status(500).json(err));
  };

// VIMEO
// Get Freedom TV+ vimeo info
module.exports.getFreedomTV = (req,res) => {
    client.request({
        path: '/users/124409770',
      }, (err, about) => {
        if (err) {
          res.status(500).send(err)
        }
        else{
            res.status(200).json(about)
        }
    })
}

// Get a video's comments
// Pagination needed for videos with lots of comments - max 100 results per page!
module.exports.getVideoComments = (req,res) => {
    client.request({
        path: `/videos/${req.params.id}/comments`,
    // query: { page: 1, per_page: 100  }
      }, 
      (err, comments) => {
        const { data } = comments
          const allComments = []
          data.forEach( (comment) => {
              let detail = {
                    comment_link: comment.link,
                    text: comment.text,
                    created_on: comment.created_on,
                    replies_uri: comment.metadata.connections.replies.uri,
                    replies_total: comment.metadata.connections.replies.total,
                    author: comment.user.name,
                    author_link: comment.user.link,
                    author_thumbnail: comment.user.pictures.base_link
                }
                allComments.push(detail)
            })
            if (err){
                res.status(500).json(err)
            }
            else{
                res.status(200).json(allComments)
            }
        }
    )
}

// Get all videos from Freedom TV+ channel
module.exports.getAllFreedomVideos = (req,res) => {
    client.request({
        path: '/users/124409770/videos', //id for freedom tv needed
    }, (err, videos) => {
        const { data } = videos
          const vids = []
          data.forEach((video) => {
            let detail = {
                video_title: video.name,
                created: video.created_time,
                duration: video.duration,
                like_count: video.metadata.connections.likes.total,
                view_count: video.stats.plays,
                video_link: video.link,
                thumbnail_link: video.pictures.base_link,
            }
            vids.push(detail)
        })
        if (err) {
          res.status(500).send(err)
        }
        else {
            res.status(200).json(vids)
        }
    })
}

// Get videos featuring a content creator on Freedom TV+ vimeo
//can be used to check for new creator or updates
module.exports.getFreedomCreatorVideos = (req,res) => {
    client.request({
        path: '/users/124409770/videos',
        query: {
            query: req.body.creator
          }
      }, (err, videos) => {
          const { data } = videos
          const vids = []
          data.forEach((video) => {
            let detail = {
                video_title: video.name,
                creator: req.body.creator,
                created: video.created_time,
                duration: video.duration,
                like_count: video.metadata.connections.likes.total,
                view_count: video.stats.plays,
                video_link: video.link,
                thumbnail_link: video.pictures.base_link,
            }
            vids.push(detail)
        })
        if (err) {
          res.status(500).send(err)
        }
        else{
            console.log(vids)
            res.status(200).json(vids)
        }
    })
}

// DB helper - add all freedomtv+ videos to db
// Pagination needed to get all 500+ videos - max 100 results per page!
module.exports.addFreedomVideo = (req,res) => {
    client.request({
        path: '/users/124409770/videos', //included id for freedomTV+
        // query: { page: 7,  per_page: 100 }
    }, (err, videos) => {
        const { data } = videos
          const vid = []
          data.forEach((video) => {
                vid.push({
                    video_link: video.link,
                    video_title: video.name,
                    created_on: video.created_time,
                    duration: video.duration,
                    like_count: video.metadata.connections.likes.total,
                    view_count: video.stats.plays,
                    thumbnail_link: video.pictures.base_link
                })
        })
        knex('freedomtv_vimeo').insert(vid).catch((err) => res.status(500).json(err))
    })
}