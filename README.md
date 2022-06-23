# Bitkub's Node.js API

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

## It is currently under development.
