const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const profileSchema = new Schema({
    name: {
        type: String,

    },
    age: {
        type: Number,

    },
    // workouts: {
    // email: {
    //     type: String,
    //     // max: 1000,
    //     // min: 0,

    // // },
    // situps: {
    //     type: Number,
    //     // max: 1000,
    //     // min: 0,

    // },
    // curls: {
    //     type: Number,
    //     // max: 1000,
    //     // min: 0,

    // },
    // },
    // water: {
    //     type: Number,
    //     // max: 1000,
    //     // max: 0,

    // },
    // start: {
    //     type: Date,
    //     default: Date.now
    // },
    // end: {
    //     type: Date,
    //     default: Date.now + 6
    // },

}, { timestamps: true });

const Profile = mongoose.model('profile', profileSchema);

module.exports = Profile;