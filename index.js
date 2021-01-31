const app = require('express')();
const PORT = process.env.PORT || 3000;

var http = require('http').createServer(app);

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/src/index.html')
});

app.get('/src/style.css', (req, res) => {
	res.sendFile(__dirname + '/src/style.css')
});

app.get('/src/app.js', (req, res) => {
	res.sendFile(__dirname + '/src/app.js')
});

http.listen(PORT, () => {
	console.log('server had been started on http://localhost:3000');
});