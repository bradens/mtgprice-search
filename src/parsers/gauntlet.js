const axios = require("axios");
const cheerio = require("cheerio");

const priceFormat = 'CAD$ '

exports.fetch = (cardName) => {
  return new Promise((resolve, reject) => {
    (async () => {
      try {
        const html = await axios.get(
          "https://www.gauntletgamesvictoria.ca/products/search?q="+cardName+"&c=1"
        );
        const $ = await cheerio.load(html.data);
        let products = [];
        $("body li.product").each((i, elem) => {
          const itName = $(elem).find('h4.name').text();
          const itSet = $(elem).find('.category').text();
          const itStock = $(elem).find('input.qty').prop('max');

          if(itName.toLocaleLowerCase().indexOf(cardName.toLocaleLowerCase()) === -1) return;
          if(itStock === undefined || itStock < 1) return;

          products.push({
            store: 'Gauntlet Games',
            name: $(elem).find('h4.name').text(),
            set: $(elem).find('.category').text(),
            stock: $(elem).find('input.qty').prop('max'),
            price: parseFloat($(elem).find('form.add-to-cart-form').data('price').replace(priceFormat, ''))
          });
        });
        products.sort((a,b) => a.price - b.price);
        resolve(products);
      } catch(e) {
        reject(e)
      }
    })();
  });
};
