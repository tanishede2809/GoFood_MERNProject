const express = require('express');
const app = express();
const mongoDB = require("./db"); 
const port = 5000;

mongoDB(); 

app.get('/', (req, res) => {
    res.send('Hello World');
});
app.use(express.json())
app.use('/api',require("./Routes/CreateUser"))
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`); // ✅ backticks used
});
