const GauntletFetch = require( './parsers/gauntlet.js' );
const FusionFetch = require( './parsers/fusion.js' );
const FaceFetch = require( './parsers/facetoface.js' );
const StrongFetch = require( './parsers/stronghold.js' );

const fetch = async (cardName) => {
  const results = []
  const gauntletResults = await GauntletFetch.fetch(cardName)
  results.push(gauntletResults[0])
  const fusionResults = await FusionFetch.fetch(cardName)
  results.push(fusionResults[0])
  const faceResults = await FaceFetch.fetch(cardName)
  results.push(faceResults[0])
  const strongholdResults = await StrongFetch.fetch(cardName)
  results.push(strongholdResults[0])
  console.log(results)
}

exports.fetch = fetch
