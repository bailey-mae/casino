import express from 'express';
import db from './db/db';
import bodyParser from 'body-parser';
import _ from 'lodash';

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

app.get('/api/v1/hands', (req, res) => {
    res.status(200).send({
        success: 'true',
        message: 'hand retrieved successfully',
        hand: ''
    })
});

app.post('/api/v1/hands', (req, res) => {
    const hand = req.body;

    if(hand.length!=5) {
        return res.status(400).send({
            success: 'false',
            message: 'hand must contain five cards'
        });
    }
    //uniqueHand will be array with no duplicates in it
    const uniqueHand = _.uniqWith(hand, _.isEqual);

    if(uniqueHand.length!=5) {
        return res.status(400).send ({
            success: 'false',
            message: 'hand contains duplicate cards',
            uniqueHand : uniqueHand
        });
    };

    res.status(200).send({
        success:'true',
        message: 'hand added successfully',
        hand: hand
    })
});

app.post('/api/v1/compare', (req, res) => {
    const card1 = req.body.card1;
    const card2 = req.body.card2;

    const iseq = _.isEqual(card1,card2);

    res.status(200).send({
        success:'true',
        message: 'hand added successfully',
        iseq: iseq
    })
});

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
});