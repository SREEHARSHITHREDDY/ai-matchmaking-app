const mongoose = require('mongoose');

const participantSchema = new mongoose.Schema({
    name: { type: String, required: true },
    year: String,
    skills: {
        AI: { type: Number, default: 0 },
        Finance: { type: Number, default: 0 },
        Design: { type: Number, default: 0 },
        Marketing: { type: Number, default: 0 }
    },
    interests: [String],
    goal: String,
    personality: String,
    workingStyle: String,
    buzzword: String,
    hobbies: [String],
    need: String,
    strength: String
});

module.exports = mongoose.model('Participant', participantSchema);
