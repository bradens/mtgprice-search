const axios = require("axios");
const cheerio = require("cheerio");

exports.fetch = (cardName) => {
  return new Promise((resolve, reject) => {
    (async () => {
      try {
        const json = await axios.post(
          "https://api.conductcommerce.com/v1/getProductListings",
          {"search":cardName,"host":"www.magicstronghold.com"}
        );
        const products = []
        json.data.result.listings.forEach((elem) => {
          let itName = elem.inventoryName
          const itSet = elem.categoryName
          const variants = elem.variants.filter((fElem) => fElem.quantity > 0)
          variants.sort((a,b) => a.price - b.price);
          if(variants.length === 0) return;
          const itStock = variants[0].quantity
          const itPrice = variants[0].price
          itName += ' ' + variants[0].name

          if(itName.toLocaleLowerCase().indexOf(cardName.toLocaleLowerCase()) === -1) return;
          if(itStock === undefined || itStock < 1) return;

          products.push({
            store: 'Magic Stronghold',
            name: itName,
            set: itSet,
            stock: itStock,
            price: itPrice
          });
        })
        products.sort((a,b) => a.price - b.price);
        resolve(products);
      } catch(e) {
        reject(e)
      }
    })();
  });
};
