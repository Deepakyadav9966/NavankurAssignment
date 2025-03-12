const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose')
const authRoute = require('./routes/auth');


dotenv.config();
app.use(express.json());

const PORT = process.env.PORT || 5000;



app.use('/auth',authRoute)

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

app.listen(PORT, () => {
  console.log(`server running at port ${PORT}`);
});
