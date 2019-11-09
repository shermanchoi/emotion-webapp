const express = require('express')
var path = require('path');
const app = express()
const axios = require('axios')
const multer = require('multer')
const upload = multer({ dest: './' })





function getEmotionData(filename){
  return new Promise((resolve,reject) => {
    //TODO: This url will change with deployment
    axios.get("http://localhost:3000/vokaturi/"+filename)
    .then(response => {
      resolve(response)
    })
    .catch(() => {
      reject("error")
    })
  }) 
}

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, "/public")));

app.get('/', function (req, res) {
  res.render('index')
})

app.post('/analyze',upload.single('audio'), function (req, res, next) {
  
})

app.get('*', function(req, res) { 
  res.render('error');
});

   
app.listen(8080)
