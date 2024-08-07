const {v4} = require('uuid')
const AWS = require('aws-sdk')

const insertItem = async(event) => {

    const {item} = JSON.parse(event.body)
    const createAt = new Date().toISOString();
    const id = v4();

    const dynamoDB = new AWS.DynamoDB.DocumentClient();

    const newItem = {
        id,
        item,
        createAt,
        itemStatus: false
    }

    await dynamoDB.put(
        {
            TableName: 'ItemTableNew',
            Item: newItem
        }
    );

    return{
        statusCode: 200,
        body: JSON.stringify(newItem)
    };
}

module.exports = {
    hanler:insertItem
}