# Bitkub's Node.js API

It is currently under development. Continue this on 1st August 2022

## Aims

This module provide an easier way to make a connection to Bitkub based on the [official Bitkub's API](https://github.com/bitkub/bitkub-official-api-docs).

#### Getting started

```javascript
const Bitkub = require('bitkub-node');
const bitkub = new Bitkub();
```

# Non-secure Endpoints' API

#### Endpoint Status

```js
console.info(await bitkub.status());
```

#### Server Timestamp

```js
console.info(await bitkub.serverTime());
```

#### Available Symbols

```js
console.info(await bitkub.symbols());
```

#### Ticker Information

```js
console.info(await bitkub.ticker());
```

#### Trades Information

```js
console.info(await bitkub.trades({ lmt: 10, sym: 'THB_BTC' }));
```

#### Bids Information

```js
console.info(await bitkub.bids({ lmt: 10, sym: 'THB_BTC' }));
```

#### Asks Information

```js
console.info(await bitkub.asks({ lmt: 10, sym: 'THB_BTC' }));
```

#### Books Information

```js
console.info(await bitkub.books({ lmt: 10, sym: 'THB_BTC' }));
```

#### Depth Information

```js
console.info(await bitkub.depth({ lmt: 10, sym: 'THB_BTC' }));
```

#### TradingView Historical Information

```js
console.info(await bitkub.tradingView({ symbol: 'BTC_THB', resolution: '5', from: 1633424427, to: 1633427427 }));
```
