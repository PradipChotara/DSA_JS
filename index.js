import express from 'express';
const app = express();
const port = 3000;

// Routes
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Error handling (optional)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});