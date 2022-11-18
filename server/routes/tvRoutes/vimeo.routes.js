const { getFreedomCreatorVideos, getAllFreedomVideos, updateVideo,getFreedomTV, getVideo, addFreedomVideo,
        getVideos, addVideo, deleteVideo, getVideoComments, getVideoCommentReplies
      } = require('../../controllers/tvControllers/vimeo.controller');

module.exports = (app) => {
  app.get('/tv/freedomtv', getFreedomTV); // Get Freedom TV+'s channel Info
  app.get('/tv/freedomtv/videos', getAllFreedomVideos); // Get all videos from Freedom TV+ Vimeo
  app.get('/tv/freedomtv/video/comments/:id', getVideoComments) // Get all comments for a video. Requires video id
  app.get('/tv/freedomtv/videos/creator', getFreedomCreatorVideos); // Get a video from Freedom TV+'s channel

  // DB - Freedom TV+ (Vimeo)
  app.post('/tv/freedomtv/vimeo', addVideo); // Add a video
  app.put('/tv/freedomtv/vimeo/:link', updateVideo); // Requires video link
  app.delete('/tv/freedomtv/vimeo/:link', deleteVideo); // Requires video link
  app.get('/tv/freedomtv/vimeo/:link', getVideo); // Requires video link
  app.get('/tv/freedomtv/vimeo', getVideos); // Get all videos

  //VIMEO DB HELPERS
  app.post('/tv/freedomtv/video', addFreedomVideo); // Get a video from Freedom TV+'s channel
};