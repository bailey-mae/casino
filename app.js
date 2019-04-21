import express from 'express';
import db from './db/db';
import bodyParser from 'body-parser';
// Set up the express app
const app = express();
// Parse incoming requests data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// get all cards
app.get('/api/v1/cards', (req, res) => {
    res.status(200).send({
        success: 'true',
        message: 'cards retrieved successfully',
        cards: db
    })
});

app.post('/api/v1/cards', (req, res) => {
    if(!req.body.rank) {
        return res.status(400).send({
            success: 'false',
            message: 'rank is required'
        });
    } else if(!req.body.suit) {
        return res.status(400).send({
            success: 'false',
            message: 'suit is required'
        });
    }
    const card = {
        rank: req.body.rank,
        suit: req.body.suit,
        description: req.body.description,
    };
    db.push(card);
    return res.status(201).send({
        success: 'true',
        message: 'card added successfully'
    })
});

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
});