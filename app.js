const bodyParser   = require('body-parser');
const cookieParser = require('cookie-parser');
const express      = require('express');
const mongoose     = require('mongoose');
const logger       = require('morgan');
const cors         = require('cors')
require(`./config/cloudinary`)


mongoose.Promise = Promise;
mongoose
  .connect('mongodb://localhost/reactinary', {useMongoClient: true})
  .then(() => { console.log('Connected to Mongo!') })
  .catch(err => { console.log(err) });

const app = express();
app.use(cors())
// Middleware Setup
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());


const index = require('./routes/index');
app.use('/', index)
require('./routes/photos')(app)

const PORT = process.env.PORT || 3000

app.listen(PORT, console.log(`listening on ${PORT}`))
