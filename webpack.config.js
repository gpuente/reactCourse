const server = require ('./webpack/webpack.server.config.js');
const client = require('./webpack/webpack.client.config.js');

module.exports = function (){
    let config = [server, client];
    return config;
}