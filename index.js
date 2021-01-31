const express = require("express");
const multer  = require("multer");
  
const app = express();
  
app.use(express.static(__dirname));
app.use(multer({dest:"uploads"}).single("filedata"));
app.post("/upload", function (req, res, next) {
   
    let filedata = req.file;
    console.log(filedata);
    if(!filedata) {
				res.send("Ошибка при загрузке файла");
		}
		/*
    else
				res.send("Файл загружен");
		*/
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

app.listen(3000, () => {
	console.log('server had been started on http://localhost:3000');
});