const GauntletFetch = require( './parsers/gauntlet.js' );
const FusionFetch = require( './parsers/fusion.js' );
const FaceFetch = require( './parsers/facetoface.js' );
const StrongFetch = require( './parsers/stronghold.js' );

const fetch = async (cardName) => {
  const promises = []
  promises.push( GauntletFetch.fetch(cardName) )
  promises.push( FusionFetch.fetch(cardName) )
  promises.push( FaceFetch.fetch(cardName) )
  promises.push( StrongFetch.fetch(cardName) )

  const results = await Promise.all(promises)

  const flatResults = results.flat()
  flatResults.sort((a,b) => a.price - b.price)

  return flatResults;
}

const fetchDeal = async (cardName) => {
  const promises = []
  promises.push( GauntletFetch.fetch(cardName) )
  promises.push( FusionFetch.fetch(cardName) )
  promises.push( FaceFetch.fetch(cardName) )
  promises.push( StrongFetch.fetch(cardName) )

  const results = await Promise.all(promises)

  const flatResults = results.flat()
  flatResults.sort((a,b) => a.price - b.price)

  if(flatResults[0].price / flatResults[1].price > 0.75) return;

  flatResults[0].name += ` (Deal ${(flatResults[0].price / flatResults[1].price).toFixed(2) * 100}%)`

  return flatResults[0];
}

exports.fetch = fetch
exports.fetchDeal = fetchDeal
