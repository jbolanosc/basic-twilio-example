require('dotenv').config();

const accountSid = process.env.ACCOUNT_SID;
const authToken = process.env.AUTH_TOKEN;

const client = require('twilio')(accountSid, authToken);

client.messages.create({
    to: process.env.MY_PHONE,
    from: '+12564826978',
    body: 'Hello this is twilio'
}).then(message => console.log(message.sid));
