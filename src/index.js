const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();

// The old version of Express which is 4.15 and below, need to use express.json() instead bodyParser.json(). This is because bodyParser deprecated.
// app.use(bodyParser.json())

// set the cors first
app.use(cors({}));
//after that set parse to json
app.use(express.json());
require("./config/mongoose.js")(app);
require('./routeHandler')(app);
app.use(morgan('dev'));

app.get('/', (req, res) => {
    res.json({
        message: 'Welcome'
    });
});
const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`Application is running on http://localhost:${port}`);
});
app.use('/files', express.static("files"));