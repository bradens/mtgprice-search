const App     = require( './src/app.js' )
const express = require('express')
const exphbs  = require('express-handlebars');

const app     = express()
const port    = 3000

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/card/:cardName', async (req, res) => {
  const cardResults = await App.fetch(req.params.cardName)
  res.render('card', {cards: cardResults})
})

app.listen(port, () => {
  console.log(`MTG Price Search listening at http://localhost:${port}`)
})