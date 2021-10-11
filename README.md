# deepDecode

decode all the child object with decodeURIComponent

> When a nested object is encoded, a single layer of decoding would lead to a bug and doing multiple decoding at each layer on a dynamic object would be cumbersome.

## Example

It is a multi layer encoded object
`%257B%2522lte%2522%253A800%252C%2522gte%2522%253A1…252C%2522currencyCode%2522%253A%2522EUR%2522%257D` and decoding once would give us `%7B%22lte%22%3A800%2C%22gte%22%3A1…252C%22currencyCode%22%3A%22EUR%22%7D` (which is still an encoded object and not the result that we are interested in).

Using `deepDecode`, we don't have to worry about any number of encoding since it iterates until the complete object is decoded.

```javascript
const multiEncodedValue = '257B%2522lte%2522%253A800%252C%2522gte%2522%253A1…252C%2522currencyCode%2522%253A%2522EUR%2522%257D';

deepDecode(multiEncodedValue); // {"lte":800,"gte":1…252C"currencyCode":"EUR"}
```
