const WebSocket = require('ws');
const ws = new WebSocket('wss://api.mainnet-beta.solana.com/', { headers: { Origin: 'https://solswap.cloud' } });

ws.on('open', function open() {
  console.log('connected to mainnet-beta wss');
  ws.send(JSON.stringify({
    "jsonrpc": "2.0",
    "id": 1,
    "method": "accountSubscribe",
    "params": [
      "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
      {
        "encoding": "jsonParsed",
        "commitment": "confirmed"
      }
    ]
  }));
});

ws.on('message', function incoming(data) {
  console.log('received: %s', data);
  process.exit(0);
});

ws.on('error', function error(err) {
  console.error('error: ', err);
  process.exit(1);
});
