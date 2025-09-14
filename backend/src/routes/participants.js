const express = require('express');
const router = express.Router();
const Participant = require('../models/Participant');

// Create a new participant
router.post('/', async (req, res) => {
    try {
        const participant = new Participant(req.body);
        await participant.save();
        res.json(participant);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Get all participants
router.get('/', async (req, res) => {
    try {
        const participants = await Participant.find();
        res.json(participants);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
