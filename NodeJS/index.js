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