# Handling ForgingBlock IPN Messages With NodeJS

If you have an app that need to accept payments in cryptocurrencies, you will need IPN to communicate with the ForgingBlock servers.

Using ForgingBlock as a platform to accept cryptocurrency payments is a great solution that is as easy as opening ForgingBlock account, creating payment buttons, and adding a few lines of code to your web app.

### What’s an IPN Message?
As a developer, I want to get notify on events when a payment is completed or rejected, in order to change my users’ plan, status, account balance, and even create invoices. That's where IPN (Instant Payment Notification) come in handy.
IPN helps in receiving the success/error messages from ForgingBlock server to your server.

Assuming your server is based on ExpressJS,

In your main app file, make sure you’re using the body-parser middleware so you’ll end up with an index.js file that looks like that:

```js
// index.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
var cors = require('cors');

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const routes = require('./routes');

app.use('/', routes);

app.listen(PORT, () => console.log(`App is running on port ${PORT}`));
```

ForgingBlock IPN messages are being sent in POST method, we should add a POST route to our app that will handle these requests:

```js
// routes.js
const router = require('express').Router();
const IPNController = require('./controllers/ipn.ctrl');

router.get('/', (req, res) => { res.status(200).json('Hello World!') })
router.post('/ipn', IPNController.index);

module.exports = router;
```

As you see, we need a controller that should handle the incoming data from ForgingBlock, we'll create it like this:

```js
class IPNController {

    static index(req, res) {
    	console.log(JSON.stringify(req.body));
      // Here is the part that will give you the IPN data
      res.status(200).send('OK');
    }
  }
  
  module.exports = IPNController;
```

Done, that's all what you need. Now you can test this API using ngrok, heroku, or any other service that you would like.

Cheers!


License
----

MIT