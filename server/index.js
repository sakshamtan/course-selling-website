const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const adminRouter = require("./routes/admin");
const userRouter = require("./routes/user");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/admin", adminRouter)
app.use("/user", userRouter)
app.get("/", (req, res) => res.json({msg: "hello world after the class"}));

// Connect to MongoDB
mongoose.connect('mongodb+srv://saksham:qHtSmAxZj6B3g0a7@cluster0.dt7y968.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => console.log('Connected to MongoDB'));

app.listen(3000, () => console.log('Server running on port 3000'));