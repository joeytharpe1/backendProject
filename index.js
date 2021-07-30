const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();


//body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//route middleware
app.use('/api/members', require('./routes/plan'));

//connect to DB
mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true, useUnifiedTopology: true }, () => console.log(`connected to DB`));



const PORT = 3000;

app.listen(PORT, () => console.log(`server running on http://localhost:${PORT}`));
