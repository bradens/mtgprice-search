const axios = require("axios");
const cheerio = require("cheerio");

exports.fetch = (cardName) => {
  return new Promise((resolve, reject) => {
    (async () => {
      try {
        const html = await axios.get(
          "https://www.facetofacegames.com/search.php?search_query=" + cardName + "&section=product&in_stock=1"
        );
        const $ = await cheerio.load(html.data);
        let products = [];
        $("body li.product").each((i, elem) => {
          const itName = $(elem).find('h4.card-title a').text();
          const itSet = $(elem).find('h4.card-title .card-set').text();

          if(itName.toLocaleLowerCase().indexOf(cardName.toLocaleLowerCase()) === -1) return;

          products.push({
            store: 'Face to Face',
            name: itName,
            set: itSet,
            stock: '1+',
            price: parseFloat($(elem).find('article.card').data('product-price'))
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
