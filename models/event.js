const mongoose = require('mongoose');

const eventsSchema = new mongoose.Schema({
    // id: {
    //     type: String
    // },
    type: {
        type: String,
        set: value => value.toLowerCase().replace(/(^|\s)\S/g, l => l.toUpperCase())
    },
    max: {
        type: Number
    },
    signedUp: {
        type: Number
    },
    date: {
        type: Date, default: Date.now
    },

})

const Event = mongoose.model('Event', eventsSchema);

module.exports = Event;