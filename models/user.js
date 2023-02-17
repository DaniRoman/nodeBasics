const { Schema, model } = require('mongoose');

const UserShema = Schema({

    name: {
        type: String,
        required: [ true, "Name is mandatory to fill"]
    },
    email:  {
        type: String,
        required: [ true, "Email is mandatory to fill"],
        unique: true
    },
    password:  {
        type: String,
        required: [ true, "Pass is mandatory to fill"],
        unique: true
    },
    img:  {
        type: String,
    },
    rol:  {
        type: String,
        required: [ true, "Role is mandatory to fill"],
        enum: ['ADIMN_ROLE', 'USER_ROLE']
    },
    state:  {
        type: Boolean,
        default: true,
    },
    google:  {
        type: Boolean,
        default: false,
    }
});

module.exports = model('Users', UserShema)