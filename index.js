const express = require('express');
const app = express();
const path = require('path');
const axios = require('axios');
var methodOverride = require('method-override');


app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(methodOverride('_method'));

axios.get('https://api.covid19api.com/summary')
.then(res1 => {
    x = res1.data;
    c = x.Countries;
});







app.get('/', (req, res) => {
  res.render('index', {x, c});
})

app.get('/data', (req, res) => {
  res.render('main');
})


app.get('/:id', async (req, res) => {
  const { id } = req.params;

  console.log('before above');
  for(let i of c){
    if(i.Country == id){
      selected_country = i;
    }
  }
  result = selected_country;
  await res.render('show', {result});
})



app.listen(3000, () => {
  console.log("Server is running!");
})