const cloudinary =  require('cloudinary')
const cloudinaryStorage = require('multer-storage-cloudinary')
const multer = require('multer')

const keys = require('./keys')

cloudinary.config({
  cloud_name: keys.CLOUDINARY_CLOUD_NAME,
  api_key: keys.CLOUDINARY_API_KEY,
  api_secret: keys.CLOUDINARY_API_SECRET
})

let storage = cloudinaryStorage({
  cloudinary: cloudinary,
  folder: '/folder-name', // The name of the folder in cloudinary
  allowedFormats: ['jpg', 'png'],
  filename: function (req, file, cb) {
    cb(null, file.originalname); // The file on cloudinary would have the same name as the original file name
  }
})

const uploadCloud = multer({ storage: storage })

module.exports = uploadCloud