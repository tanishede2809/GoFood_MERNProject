const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://goFood:goFood_user1@cluster0.arpx9sr.mongodb.net/goFood?retryWrites=true&w=majority&appName=Cluster0';

const mongoDB = async () => {
    try {
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("MongoDB connected successfully");
        const fetched_data = await mongoose.connection.db.collection("food_items");
        fetched_data.find({}).toArray(function(err,data){
            if(err) console.log(err);
            else console.log();
        })
    } catch (err) {
        console.error("MongoDB connection error:", err.message);
        process.exit(1); // stop the server if DB connection fails
    }
};

module.exports = mongoDB;
