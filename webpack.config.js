const server = require ('./webpack/webpack.server.config.js');

module.exports = function (){
    let config = [server];
    return config;
}