const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
app.use(cors());
app.use(
  bodyParser.json()
);

// app.use(() => {
//   console.log('App use is running');
// });

app.post('/', (req, res) => {
  console.log(req.body);

  fs.writeFile('bloggfærsla', JSON.stringify(req.body), 'utf8', (err) => {

      if (err) throw err;
    console.log('blog saved!');
  
  });
});


app.get('/', (req, res) => {
  res.send('Muna að nota formið!!');
});
app.listen(5000)
console.log ("listening on port 3000");
