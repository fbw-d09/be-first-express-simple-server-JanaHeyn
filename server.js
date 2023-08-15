import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
const app = express();
const port = 3001;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/hello', (req, res) => {
    res.set({'Content-Type': 'text/plain'});
    res.status(200).send('Hello to you too!');
});

app.get('/time', (req, res) => {
    const currentDate = new Date().toLocaleString();
    res.status(200).send(`current day and time: ${currentDate}`);
});

app.get('/random', (req, res) => {
    const randomNum = Math.floor(Math.random() * (11 - 1) + 1);
    res.status(200).send(`random number between 1 und 10: ${randomNum}`);
});

app.get('/fact', (req, res) => {
    const fact = 'JavaScript was created in about 10 days!';
    res.status(200).send(fact);
})


app.listen(port, () => {
    console.log('the server is listening...')
});