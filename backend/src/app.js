const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const participantsRouter = require('./routes/participants');

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

const port = process.env.PORT || 5000;
const mongoURI = process.env.MONGO_URI;

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("MongoDB connected!");
}).catch(err => {
    console.error("MongoDB connection error:", err);
});

app.use('/api/participants', participantsRouter);

app.get('/', (req, res) => {
    res.send('AI Matchmaking API is running');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
