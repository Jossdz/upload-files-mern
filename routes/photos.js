const Movie = require('../models/movie')
const uploadCloud = require('../config/cloudinary')

module.exports = app => {
  app.post('/photo/add', uploadCloud.single('photo'), (req, res, next) => {
    const imgPath = req.file.url;
    const newMovie = new Movie({imgPath})
    newMovie.save()
    .then(e => {
      res.json({
        success: true,
        pictureUrl: req.file.url
      })
    })
    .catch(error => {
      console.log(error)
    })
  })
}