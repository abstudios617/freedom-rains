const { google } = require('googleapis');
const { youtube } = require('../../config')
const knex = require('../../utils/knex').instance();

// DB - YOUTUBE CHANNELS
// Add Youtube Channel
module.exports.addChannel = (req,res) =>{
    google.youtube('v3').channels.list({
        key: youtube,
        part: 'snippet, statistics',
        id: req.body.channel
    }).then((channel) => {
        const {data} = channel;
                data.items.forEach((item) => {
                    knex('youtube_channels')
                    .insert(
                     {  channel_id: item.id,
                        channel_name: item.snippet.title,
                        created_on: item.snippet.publishedAt,
                        thumbnail: item.snippet.thumbnails.high.url,
                        description: item.snippet.description,
                        subscriber_count: item.statistics.subscriberCount,
                        view_count: item.statistics.viewCount,
                        video_count: item.statistics.videoCount
                    }).catch((err) => res.status(500).json(err))
                })      
    }).catch((err) => res.status(500).json(err))
}

//Delete a channel 
module.exports.deleteChannel = (req, res) => {
    knex('youtube_channels')
      .where({ channel_id : req.params.id })
      .del()
      .then((channel) => res.status(200).json(channel))
      .catch((err) => res.status(500).json(err));
}

// Update a channel 
module.exports.updateChannel = (req, res) => {
    knex('youtube_channels')
      .where({ channel_id : req.params.id })
      .update({
          channel_name: req.body.channel_name,
          thumbnail: req.body.thumbnail,
          description: req.description,
      },
      ['channel_id', 'channel_name', 'created_on','thumbnail','description','subscriber_count','view_count', 'video_count'])
      .then((channel) => res.status(200).json(channel))
      .catch((err) => res.status(500).json(err));
}

// Get all Freedom TV YouTube Channels
module.exports.getChannels = (req,res) =>{
    knex('youtube_channels')
    .select('*')
    .then((channels) => res.status(200).json(channels))
    .catch((err) => res.status(500).json(err))
}

// Get a Freedom TV YouTube Channel
module.exports.getChannel = (req,res) =>{
    knex('youtube_channels')
    .where({ channel_id: req.params.id })
    .then((channels) => res.status(200).json(channels))
    .catch((err) => res.status(500).json(err))
}


// DB - YOUTUBE VIDEOS
// Add a video
module.exports.addVideo = (req, res) => {
    knex('freedomtv_youtube')
      .insert({
          video_id: req.body.video_id,
          channel_id: req.body.channel_id,
          title: req.body.title,
          view_count: req.body.view_count,
          like_count: req.body.like_count,
          comment_count: req.body.comment_count,
          published_at: req.body.published_at,
          description:  req.body.description,
          thumbnail: req.body.thumbnail,
          tags: req.body.tags,
          category: req.body.category,
          embedded_player: req.body.embedded_player
      },
      ['video_id', 'channel_id', 'title','view_count','like_count','comment_count','published_at', 'description', 'thumbnail', 'tags', 'category', 'embedded_player'])
      .then((video) => res.status(200).json(video))
      .catch((err) => res.status(500).json(err));
};

// Update a video 
module.exports.updateVideo = (req, res) => {
    knex('freedomtv_youtube')
      .where({ video_id : req.params.id })
      .update({
          video_id: req.body.video_id,
          channel_id: req.body.channel_id,
          title: req.body.title,
          view_count: req.body.view_count,
          like_count: req.body.like_count,
          comment_count: req.body.comment_count,
          published_at: req.body.published_at,
          description:  req.body.description,
          thumbnail: req.body.thumbnail,
          tags: req.body.tags,
          category: req.body.category,
          embedded_player: req.body.embedded_player
      },
      ['video_id', 'channel_id', 'title','view_count','like_count','comment_count','published_at', 'description', 'thumbnail', 'tags', 'category', 'embedded_player'])
      .then((video) => res.status(200).json(video))
      .catch((err) => res.status(500).json(err));
}

// Delete a video
module.exports.deleteVideo = (req,res) =>{
    knex('freedomtv_youtube')
    .where({ video_id: req.params.id })
    .del()
    .then((video) => res.status(200).json(video))
    .catch((err) => res.status(500).json(err))
}

// Get all Freedom TV YouTube Channels
module.exports.getVideos = (req,res) =>{
    knex('freedomtv_youtube')
    .select('*')
    .then((videos) => res.status(200).json(videos))
    .catch((err) => res.status(500).json(err))
}

// Get a Freedom TV YouTube Channel
module.exports.getVideo = (req,res) =>{
    knex('freedomtv_youtube')
    .where({ video_id: req.params.id })
    .then((video) => res.status(200).json(video))
    .catch((err) => res.status(500).json(err))
}


// YOUTUBE
// Get Youtube channel subscriptions
module.exports.getSubscriptions = (req,res) =>{
    google.youtube('v3').subscriptions.list({
        key: youtube,
        part: 'snippet',
        channelId: req.params.id,
        maxResults: 50
    }).then((subscription) => {
        const {data} = subscription
        const subList = []
        data.items.forEach((item) => {
            let sub = {
                subscription_channel_id : item.snippet.resourceId.channelId,
                subscription_channel : item.snippet.title,
                description: item.snippet.description,
                thumbnail: item.snippet.thumbnails.high.url
            }
            subList.push(sub)
        })
        res.status(200).json(subList)
    }).catch((err) => res.status(500).json(err))
}

// Get Youtube channel playlists
module.exports.getPlaylists = (req,res) =>{
    google.youtube('v3').playlists.list({
        key: youtube,
        part: 'snippet, contentDetails, status',
        channelId: req.params.id
    }).then((playlist) => {
        const { data } = playlist
        const playlists = []
        data.items.forEach((item) => {
            let detail = {
                playlist_id: item.id,
                playlist: item.snippet.title,
                description: item.snippet.description,
                thumbnail: item.snippet.thumbnails.high.url,
                privacy_status: item.status.privacyStatus,
                video_count: item.contentDetails.itemCount,
                created_on: item.snippet.publishedAt
            }
            playlists.push(detail)
        })
        res.status(200).json(playlists)
    }).catch((err) => res.status(500).json(err))
}

// Get related videos from a youtube video
module.exports.getRelatedVideos = (req,res) =>{
    google.youtube('v3').search.list({
        key: youtube,
        part: 'snippet',
        type: 'video', 
        maxResults: 10,
        relatedToVideoId: req.params.id
    }).then((videos) => {
        const { data } = videos
        const vids = []
        data.items.forEach((item) =>{
            let detail = {
                channel_id: item.snippet.channelId,
                channel_title:  item.snippet.channelTitle,
                published_at: item.snippet.publishedAt,
                thumbnail: item.snippet.thumbnails.high.url
            }
            vids.push(detail)
        })
        res.status(200).json(vids)})
    .catch((err) => res.status(500).send(err))
}

// Get comment threads for a YouTube video 
// * pageToken - Each response will return a nextPageToken which would contain
// more data. Max results per page is 100. Here page 1 with 100 results is returned.
module.exports.getVideoComments = (req,res) =>{
    google.youtube('v3').commentThreads.list({
        key: youtube,
        part: 'snippet, replies',
        videoId: req.params.id,
        //pageToken:   
        maxResults: 100 //results range from 1 - 100
    }).then( (comments) => res.status(200).json(comments))
    .catch((err) => res.status(500).send(err))
}


// Get a video from a YouTube channel
module.exports.getAVideo = (req,res) =>{
    google.youtube('v3').videos.list({
        key: youtube,
        part: 'snippet, statistics, player',
        id: req.params.id
    }).then((video) => {
        const { data } = video
        const videoInfo = []
        data.items.forEach((item) => {
            let detail = {
                video_id: item.id,
                channel_id: item.snippet.channelId,
                title: item.snippet.title,
                view_count: item.statistics.viewCount,
                like_count: item.statistics.likeCount,
                comment_count: item.statistics.commentCount,
                published_at: item.snippet.publishedAt,
                description: item.snippet.description,
                thumbnail: item.snippet.thumbnails.high.url,
                tags: item.snippet.tags,
                category: item.snippet.categoryId,
                embedded_player: item.player.embedHtml
            }
            videoInfo.push(detail)
        })
        res.status(200).json(videoInfo)
    }).catch((err) => res.status(500).json(err))
}

//Get all videos from a YouTube channel
module.exports.getChannelVideos = (req,res) =>{
    google.youtube('v3').search.list({
        key: youtube,
        part: 'snippet, id',
        channelId: req.params.id,
        type: 'video', 
        //pageToken: 'CDIQAA',
        maxResults: 50 //results range from 1 - 50
    }).then( (videos) => {
        const { data } = videos
        const vids = []
        data.items.forEach((item) =>{
            let detail = {
                channel_id: item.snippet.channelId,
                channel_title:  item.snippet.channelTitle,
                video_id: item.id.videoId,
                published_at: item.snippet.publishedAt,
                thumbnail: item.snippet.thumbnails.high.url,
            }
            vids.push(detail)
        })
        res.status(200).json(vids)})
    .catch((err) => res.status(500).send(err))
}

// YOUTUBE DB HELPERS
// DB - Add all videos from a channel 
module.exports.addAllChannelVideos = (req,res) =>{
    google.youtube('v3').search.list({
        key: youtube,
        part: 'snippet, id',
        channelId: req.body.id,
        type: 'video', 
        maxResults: 50, //results range from 1 - 50
    }).then( (videos) => {
        const { data } = videos
        const vids = []
        data.items.forEach((item) =>{
            vids.push({
                video_id: item.id.videoId,
                channel_id: item.snippet.channelId,
                channel_title:  item.snippet.channelTitle,
                published_at: item.snippet.publishedAt,
                thumbnail: item.snippet.thumbnails.high.url,
            })
        })
        knex('youtube_videos').insert(vids).catch((err) => res.status(500).json(err))
    })
}

// Add video stats to db videos - grabs channel videos theb fetches stats for each
module.exports.addVideoStats = (req,res) =>{
    knex('youtube_videos')
    .select('video_id')
    .then( (videos) =>{
        videos.forEach( (video) =>{
            google.youtube('v3').videos.list({
                key: youtube,
                part: 'snippet, statistics, player',
                id: video.video_id
            }).then( (vid) =>{
                const { data } = vid
                const stats = []
                data.items.forEach((item) => {
                    let detail = {
                        video_id: item.id,
                        channel_id: item.snippet.channelId,
                        title: item.snippet.title,
                        view_count: item.statistics.viewCount,
                        like_count: item.statistics.likeCount,
                        comment_count: item.statistics.commentCount,
                        published_at: item.snippet.publishedAt,
                        description: item.snippet.description,
                        thumbnail: item.snippet.thumbnails.high.url,
                        tags: item.snippet.tags,
                        category: item.snippet.categoryId,
                        embedded_player: item.player.embedHtml
                    }
                    stats.push(detail)
                })
                knex('freedomtv_youtube')
                .insert((stats))
                .catch( (err) => res.status(500).json(err)) 
                })
            }).catch( (err) => res.status(500).json(err)) 
        })
}