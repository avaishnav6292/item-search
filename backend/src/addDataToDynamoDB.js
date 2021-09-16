const data = require("../data/Items.json");
const docClient = require("./dynamodbConfig");

let addDataToDynamoDB = function () {
    Object.keys(data).forEach(
        (key) => {
            var params = {
                TableName: "items",
                Item:  data[key]
            };
            
            docClient.put(params, function (err, data) {
                if (err) {
                    console.log("Error - " + JSON.stringify(err, null, 2));                      
                } else {
                    console.log("Success - Item Added" );                      
                }
            });
        }
    )
}

addDataToDynamoDB();
        
