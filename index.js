const App = require( './src/app.js' )

const cardName = process.argv[2]
console.log(cardName)

App.fetch(cardName)
