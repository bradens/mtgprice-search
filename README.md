# mtgprice
Magic card price search across multiple Canadian sources (Face to Face, Fusion Gaming, Gauntlet Games and Magic Stronghold).

## Setup

- `npm i`

## Usage

- `node index.js '<CARD NAME HERE>'`
  - ie. `node index.js 'scalding tarn'`

## Sample Output

```shell
griff(master)~/Git/mtgprice-canada$ node index.js 'scalding tarn'
scalding tarn
[
  {
    store: 'Gauntlet Games',
    name: 'Scalding Tarn',
    set: 'Modern Horizons 2',
    stock: '2',
    price: 39.14
  },
  {
    store: 'Fusion Gaming',
    name: 'Scalding Tarn',
    set: 'Modern Horizons 2',
    stock: '4',
    price: 59.99
  },
  {
    store: 'Face to Face',
    name: 'Scalding Tarn ',
    set: 'Modern Horizons 2',
    stock: '1+',
    price: 49.99
  },
  {
    store: 'Magic Stronghold',
    name: 'Scalding Tarn NM/Mint',
    set: 'Modern Horizons 2',
    stock: 8,
    price: 48
  }
]
griff(master)~/Git/mtgprice-canada$
```
