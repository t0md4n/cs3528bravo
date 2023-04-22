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
app.get("/my-events", (req, res) => { //our GET route needs to point to the index.html in our build
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));  
});




app.get("/getevents/:userId", async (req, res) => { 
  const { userId } = req.params;
  const currentDate = new Date().toLocaleDateString('en-GB');  

  const events = await Event.find({ 
    creator: { $ne: userId },
    $expr: { $lt: [ "$signedUp", "$maxParticipants" ] },
    date: { $gt: currentDate },
    participants: { $not: { $in: [mongoose.Types.ObjectId(userId)] } }
  });
  
  res.send(events);

});

// Endpoint for fetching signed up events for a user
app.get('/myevents/signedup/:userId', async (req, res) => {
  const { userId } = req.params;
  try {
    const events = await Event.find({ participants: userId });
    res.send(events);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching signed up events');
  }
});


// Endpoint for handling sign up for events
app.patch('/events/:id', async (req, res) => {
    const { id } = req.params;
    const { userId } = req.body;
  
    try {
      const event = await Event.findById(id);
      if (!event) {
        return res.status(404).send({ message: 'Event not found' });
      }
  
    //   if (event.signedUp >= event.maxParticipants) {
    //     return res.status(400).send({ message: 'Event is already full' });
    //   }

    if (event.participants.includes(userId)) {
      return res.status(400).send({ message: 'User has already signed up for this event' });
    }

    event.participants.push(userId);
    event.signedUp += 1;

    await event.save();
    res.send(event);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: 'Internal Server Error' });
  }
});


// Endpoint for leaving an event
app.patch('/events/:id/leave', async (req, res) => {
    const { id } = req.params;
    const { userId } = req.body;
    try {
      const event = await Event.findById(id);
  
      if (!event) {
        return res.status(404).send('Event not found');
      }
  
      if (!event.participants.includes(userId)) {
        return res.status(400).send('User is not signed up for this event');
      }
  
      event.participants = event.participants.filter(participant => participant != userId);
      event.signedUp -= 1;
      await event.save();
  
      res.send(event);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error leaving event');
    }
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

// Endpoint for sending update email
app.get('/sendEmail', (req, res) => {
  const { email, subject, message } = req.body;
  
  const transporter = nodemailer.createTransport({
      host: 'smtp.office365.com',
      port: 587,
      secure: false,
      auth: {
          user: 'sporesevent@outlook.com',
          pass: 'cs3528bravo'
      }
  });
  
  // Set up email options
  let mailOptions = {
    from: 'sporesevent@outlook.com',
    to: 'rahiasm@gmail.com',
    subject: 'Update',
    text: 'cs3528 has joined the event'
  };

  // Send email using Nodemailer
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).send('Email sent successfully');
    }
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