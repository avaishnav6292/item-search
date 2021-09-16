const express = require("express");
const cors = require("cors");

const port = process.env.PORT || 8082;
const docClient = require("./dynamodbConfig");

const app = express();
app.use(cors());


app.get("/items", (req, res) => {
    var params = {
        TableName: "items"
    };

    docClient.scan(params, (err, data) => {
        if (err) {
            console.log(err);
            res.send();
        } else {
            var items = [];
            for (var i in data.Items)
                items.push(data.Items[i]);
            res.contentType = 'application/json';
            res.send(items);
        }
    });
});

app.get("/items/:id", (req, res) => {
    const {id} = req.params;
    var params = {
        TableName: "items",
        Key: {
            _id: id
        }
    };

    docClient.get(params, (err, data) => {
        if (err) {
            console.log(err);
            res.send();
        } else {
            res.contentType = 'application/json';
            res.send(data.Item);
        }
    });
});

app.listen(port, () => {
    console.log(`App running on port ${port}`);
})