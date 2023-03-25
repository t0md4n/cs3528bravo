var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');
const Event = require('./models/event');
const cors = require('cors');

var app = express();
app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.set('port', process.env.PORT || 5000);
console.log("+++++++++++++++" + app.get('port'));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static('./client/build'));

app.use('/api/data', require('./routes/new-index.js'))

const url = 'mongodb+srv://Cluster34479:UWFtRFtGX090@cluster34479.1jsddom.mongodb.net/cs3528';

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error(err));

app.get("/", (req, res) => { //our GET route needs to point to the index.html in our build
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));  
});

app.get("/login", (req, res) => { //our GET route needs to point to the index.html in our build
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));  
});

app.get("/events", (req, res) => { //our GET route needs to point to the index.html in our build
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));  
});
app.get("/createevent", (req, res) => { //our GET route needs to point to the index.html in our build
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));  
});
app.get("/signup", (req, res) => { //our GET route needs to point to the index.html in our build
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));  
});



app.get("/getevents", async (req, res) => { 
    const events = await Event.find({});

    // const transformedEvents = events.map(event => {
    //     const date = new Date(event.date);
    //     return {
    //       ...event._doc,
    //       day: date.getDate(),
    //       month: date.getMonth(),
    //       year: date.getFullYear(),
    //       hour: date.getHours(),
    //       minutes: date.getMinutes(),
    //     };
    //   });
      res.send(events);

});

app.patch('/events/:id', async (req, res) => {
    const { id } = req.params;
    // const { signedUp } = req.body;
    const event = await Event.findOneAndUpdate({ _id: id }, { $inc: { signedUp: 1 } });

    res.send(event);
});

app.post('/createevent', (req, res) => {
    const eventData = req.body;
    const event = new Event(eventData);
    event.save()
    .catch((error) => {
      console.error(error);
      res.status(500).send('Error creating event');
    });
});

// Endpoint for getting events created by a user
app.get('/myevents/user/:creatorId', async (req, res) => {
    const creatorId = req.params.creatorId;
    const events = await Event.find({ creator: creatorId });
    res.send(events);
});

// Endpoint for cancelling an event
app.delete('/events/:id', async (req, res) => {

    const { id } = req.params;
    const event = await Event.findOne({ _id: id });
    
    if (!event) {
      return res.status(404).send(`Event with ID ${id} not found.`);
    }
    // if (event.signedUp > 0) {
    //   return res.status(400).send('Cannot cancel an event that has participants signed up.');
    // }
    await Event.findOneAndDelete({ _id: id });
    res.send(`Event with ID ${id} has been cancelled.`);
});
  


// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;

app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});