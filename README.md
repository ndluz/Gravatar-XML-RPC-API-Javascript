
#  Gravatar XML-RPC API Javascript 


A XML-RPC API Gravatar using JavaScript and Axios, with all methods implemented.


## References

 - [Gravatar XML-RPC API Especification](https://br.gravatar.com/site/implement/xmlrpc/)
 - [Axios](https://www.npmjs.com/package/axios)


## Installation

To install all dependencies:

```bash
  yarn start 
```
or 

```bash
  npm install
```
    
## Environment Variables

To run this code, you need to set this envroiment variables

`GRAVATAR_PASSWORD` 
 
`GRAVATAR_HASH_EMAIL` (md5 email hash) 


## Usage/Examples

```javascript
const Gravatar = require('./gravatar');
const gravTest = require('./xml/testXML');

Gravatar.test(gravTest);

```


## Contributing
if you have any idea or suggestion to contribute... all contributes are always welcome!


