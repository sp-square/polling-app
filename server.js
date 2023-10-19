const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(express.static('public'));

// Routes
// app.get('/', (req, res) => res.status(200).send('Hello World!'));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
