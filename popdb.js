
const mongoose = require('mongoose');
const Event = require('./models/event');

const url = 'mongodb+srv://testuser:codio@cluster0.chewq69.mongodb.net/cs3528?retryWrites=true&w=majority';

const connection = mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true
    }).then(async client => {
        console.log("Connected to MongoDB successfully");
        const collection = mongoose.connection.collection('events');
        // Drop the collection
        await collection.drop();

        return Event.find();
    })
    .catch(err => {
        console.log("MONGO CONNECTION ERROR!!!")
        console.log(err)
    })


// const p = new Event({
//     type: 'Basketball',
//     max: 2,
//     signedUp: 1
// })
// p.save()
//     .then(p => {
//         console.log(p)
//     })
//     .catch(e => {
//         console.log(e)
//     })

const seedEvents = [
    {
        type: 'Basketball',
        max: 6,
        signedUp: 1,
        location: 'Aberdeen'
    },
    {
        type: 'Tennis',
        max: 2,
        signedUp: 1,
        location: 'Aberdeen'
    },
    {
        type: 'Football',
        max: 10,
        signedUp: 1,
        location: 'Aberdeen'
    },
    {
        type: 'Football',
        max: 5,
        signedUp: 1,
        location: 'Aberdeen'
    },
    
]

Event.insertMany(seedEvents)
.then(res => {
    console.log(res)
})
.catch(e => {
    console.log(e)
})


