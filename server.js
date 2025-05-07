const express = require('express');
const app = express();

const port = process.env.PORT || 8080;


app.listen(() => {console.log(`Running on port ${port}`)});