const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'build')))

app.get('/api', async (req, res, next) => {
  try {
    res.json({ hello: 'world' })
  } catch (err) {
    next(err)
  }
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/build/index.html'))
});

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`)
})