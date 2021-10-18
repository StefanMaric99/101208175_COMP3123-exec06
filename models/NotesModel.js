const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const noteSchema = new Schema({
	noteTitle: {
		type: String,
		required: true
	},

	noteDescription: {
		type: String,
		required: true
	},

	priority: {
		type: String,
    enum: ['HIGH', 'LOW', 'MEDUIM'],
    default: 'MEDUIM',
		required: true
	},

	dateAdded: {
		type: String,
		required: true
	},

	dateUpdated: {
		type: String,
		required: true
	},

}, { timestamp: true })

const Note = mongoose.model('Note', noteSchema);
module.exports = Note;