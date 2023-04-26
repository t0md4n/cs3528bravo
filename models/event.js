const mongoose = require('mongoose');

const eventsSchema = new mongoose.Schema({
    // id: {
    //     type: String
    // },
    sportType: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    date: {
        type: String, 
        required: true
    },
    time: {
        type: String,
        required: true
    },
    maxParticipants: {
        type: Number,
        required: true
    },
    signedUp: {
        type: Number,
        required: true
    },
    participants: [ { type: mongoose.Schema.Types.ObjectId, ref: 'User' } ],
    creator: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    userEmail: {
        type: String,
        required: true
    }
}, { timestamps: true })

const Event = mongoose.model('Event', eventsSchema);

module.exports = Event;