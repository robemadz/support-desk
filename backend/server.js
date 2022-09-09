const express = require('express');
const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 4000;

const app = express();

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Hello from json' });
});

//Routes
app.use('/api/users', require('./routes/userRoutes'));

app.listen(PORT, () => console.log(`server started on port ${PORT}`));
