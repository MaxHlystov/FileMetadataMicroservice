const path = require("path");
const express = require("express");
const multer  = require('multer');

var storage = multer.memoryStorage();
var upload = multer({ storage: storage });

const port = process.env.PORT || 8080;
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.post('/', upload.single("file"), (req, res) => {
    res.send('{"size":' + req.file.size + '}');
});

app.listen(port);
