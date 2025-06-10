const express = require('express');
const mainRoutes = require('./routes/main.routes');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors({ origin: "http://localhost:5173", credentials: true }));


app.use(express.json());

// Routes
app.use('/', mainRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});