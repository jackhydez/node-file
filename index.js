const express = require("express");
const multer  = require("multer");
  
const app = express();
  
app.use(express.static(__dirname));
app.use(multer({dest:"uploads"}).single("filedata"));

app.post("/", function (req, res, next) {
   
  let filedata = req.file;
  console.log(filedata);
  if(!filedata) {
		res.sendFile(__dirname + '/src/errLoadFile.html');
	}
  else {
		res.sendFile(__dirname + '/src/index.html');
	}

});

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/src/index.html');
});

app.get('/src/style.css', (req, res) => {
	res.sendFile(__dirname + '/src/style.css');
});

app.get('/src/app.js', (req, res) => {
	res.sendFile(__dirname + '/src/app.js');
});

app.get('*', (req, res) => {
	res.sendFile(__dirname + '/src/pageNotFound.html');
});

app.listen(3000, () => {
	console.log('server had been started on http://localhost:3000');
});