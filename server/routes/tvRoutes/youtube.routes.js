const { getChannel, getChannels, getVideos, updateChannel, deleteChannel, addChannel, getPlaylists, getVideo, getSubscriptions, 
        addVideoStats, getAVideo, getVideoComments, updateVideo, deleteVideo, addVideo, getChannelVideos, getRelatedVideos, addAllChannelVideos
      } = require('../../controllers/tvControllers/youtube.controller');

module.exports = (app) => {
  app.get('/tv/channel/playlists/:id', getPlaylists); // Get a channel's playlists -- Requires channel id.
  app.get('/tv/channel/subscriptions/:id', getSubscriptions); // Get channel subscriptions from a channel - Requires channel id.
  app.get('/tv/video/comments/:id', getVideoComments); // Get a video's comments -- Requires video id.
  app.get('/tv/video/related/:id', getRelatedVideos); // Get related videos -- Required video id
  app.get('/tv/channel/video/:id', getAVideo); //Get a Youtube video
  app.get('/tv/channel/videos/:id', getChannelVideos); //Get all videos from a Youtube channel --Requires channel id

  // DB - freedomTv YouTube channels
  app.post('/tv/channel', addChannel); // Add new creator channel 
  app.put('/tv/channel/:id', updateChannel); // Update channel -- Requires channel id
  app.delete('/tv/channel/:id', deleteChannel); // Delete channel -- Requires channel id
  app.get('/tv/channel/:id', getChannel); // Get a channel -- Requires channel id
  app.get('/tv/channel', getChannels); // Get a channel -- Requires channel id

  // DB - freedomTv YouTube videos
  app.post('/tv/freedomtv/youtube', addVideo); // Add new youtube video
  app.put('/tv/freedomtv/youtube/:id', updateVideo); // Update video --  Requires video id
  app.delete('/tv/freedomtv/youtube/:id', deleteVideo); // Delete channel --  Requires video id
  app.get('/tv/freedomtv/youtube/:id', getVideo); // Get a youtube video- Requires video id
  app.get('/tv/freedomtv/youtube', getVideos); // Get all videos

  //YOUTUBE DB HELPERS
  //change to post soon
  app.post('/tv/youtube/videos/stats', addVideoStats); // insert youtube video data to db
  app.post('/tv/youtube/videos', addAllChannelVideos); // insert youtube video data to db
}