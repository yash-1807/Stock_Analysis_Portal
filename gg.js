app.use(express.static('public'));

// Route to serve HTML form
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});