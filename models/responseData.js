const mongoose = require('mongoose');

const NoteSchema = mongoose.Schema({
    data: String
}, {
    timestamps: true
});

module.exports = mongoose.model('reponsedatas',NoteSchema);