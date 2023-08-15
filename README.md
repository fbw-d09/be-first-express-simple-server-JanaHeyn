# An almost simple server in Express.js
[![Status overview badge](../../blob/badges/.github/badges/main/badge.svg)](#-results)


This project will allow you to practice setting up a server that will handle simple requests in Express.js.

## What you will be doing

You will be setting up a server with four **endpoints** using the Express.js framework.

The endpoints will only respond to **GET** requests, and send a **string** as a response.

## Tasks

### Task 1 - Getting ready

1. Install the express.js npm package `npm i express`
2. Create the file `server.js`

### Task 2 - Setting up your server

Use the following code to setup your server

```js
import express from "express";

const app = express();

const server = app.listen(3001, () => {
  console.log("The server is listening... 🐒");
});
```

### Task 3 - GET '/hello'

Create an endpoint that will respond to the path `/hello`

- It should send a **response** with a string. Use the following string;

```text
Hello to you too!
```

### Task 4 - GET '/time'

Create an endpoint that will respond to the path `/time`.

- It should return a `response` with the current time and date

> Research:
>
> [Date Object [en]](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)
>
> [Date Object [de]](https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Date)

### Task 5 - GET '/random'

Create an endpoint that will respond to the path `/random`.

- It should send a **response** with the random number

> Research:
>
> [Math.random() [en]](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random)
>
> [Math.random() [de]](https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Math/random)

### Task 6 - GET '/fact'

Create an endpoint that will respond to the path `/fact`.

- It should send a **response** with a string. Use the following string;

```text
JavaScript was created in about 10 days!
```

[//]: # (autograding info start)
# <img src="https://github.com/DCI-EdTech/autograding-setup/raw/main/assets/bot-large.svg" alt="" data-canonical-src="https://github.com/DCI-EdTech/autograding-setup/raw/main/assets/bot-large.svg" height="31" /> Results
> ⌛ Give it a minute. As long as you see the orange dot ![processing](https://raw.githubusercontent.com/DCI-EdTech/autograding-setup/main/assets/processing.svg) on top, CodeBuddy is still processing. Refresh this page to see it's current status.
>
> This is what CodeBuddy found when running your code. It is to show you what you have achieved and to give you hints on how to complete the exercise.


### JS file

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status0.svg) | `server.js` should exist |



[🔬 Results Details](../../actions)
[🐞 Tips on Debugging](https://github.com/DCI-EdTech/autograding-setup/wiki/How-to-work-with-CodeBuddy)
[📢 Report Problem](https://docs.google.com/forms/d/e/1FAIpQLSfS8wPh6bCMTLF2wmjiE5_UhPiOEnubEwwPLN_M8zTCjx5qbg/viewform?usp=pp_url&entry.652569746=be-express-almost-simple-server)


[//]: # (autograding info end)