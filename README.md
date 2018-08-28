# Huffman-simple
Simple huffman coding implementation in Node.js
Uses 281 code as escape char


## Usage

```
npm install huffman-simple
```

To encode a string:
```
const huffman = require('huffman-simple');

// convert to an array of ints
const arr = [...'<your string>'].map(char=>char.charCodeAt(0));
const encoded = huffman.encode(arr);
const decoded = huffman.decode(encoded);
const str = String.fromCharCode(...decoded);
```

## Bugs
breaks for many cases:
'9-qf;l1g4asr'
'qqqqqqqqqq'