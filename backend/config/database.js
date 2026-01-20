const mongoose = require('mongoose');

// Read MongoDB connection URI from environment variables
const MONGO_URI = process.env.MONGO_URI;

// fUNCTION TO CONNECT TO MongoDB
const connectDatabase = () => {
    mongoose.connect(MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true})  // useNewUrlParser: Uses the modern MongoDB URL parser
       .then(() => {                                                                // useUnifiedTopology: Uses the new MongoDB server discovery engine
          console.log("Mongoose Connected");
       });
}

// Export the database connection function
module.exports = connectDatabase;


