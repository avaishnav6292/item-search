var AWS = require("aws-sdk");
let awsConfig = {
    "region": "ap-south-1",
    "endpoint": "http://dynamodb.ap-south-1.amazonaws.com",
    "accessKeyId": "AKIA56ITW6S4I3DWZBSX", "secretAccessKey": "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"
};
AWS.config.update(awsConfig);

let docClient = new AWS.DynamoDB.DocumentClient();

module.exports = docClient;


