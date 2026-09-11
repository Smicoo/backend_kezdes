npm init -y -> package.jsont csinal

{
  "name": "backend_kezdes",
  "version": "1.0.0",
  "description": "npm init -y",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/Smicoo/backend_kezdes.git"
  },
  "keywords": [],
  "type": "module", //commonjsrol at kell irni module ra 
  "bugs": {
    "url": "https://github.com/Smicoo/backend_kezdes/issues"
  },
  "homepage": "https://github.com/Smicoo/backend_kezdes#readme"
}

src mappa majd index.ts hozzadas
npm i -D typescript     parancs kiadasa

"dev": "nodemon --exec node ./src/index.ts",
"dev-ts": "npx tsx ./src/index.ts"

ezt hozzadjuk a scripthez

npm i -D nodemon   nodemont feltelepitjuk

npx tsc --init      ezzel ts konfig megcsinalasa