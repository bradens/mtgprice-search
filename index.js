const App     = require( './src/app.js' )
const express = require('express')
const exphbs  = require('express-handlebars');

const app     = express()
const port    = 3000

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
  res.render('home')
})

app.get('/card', async (req, res) => {
  const cardResults = await App.fetch(req.query.cardName)
  // res.json(cardResults)
  res.render('card', {cards: cardResults})
})

app.listen(port, () => {
  console.log(`MTG Price Search listening at http://localhost:${port}`)
})