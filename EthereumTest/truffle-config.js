// Allows us to use ES6 in our migrations and tests.
require('babel-register');

module.exports = {
    networks: {
        development: {
            host: 'localhost',
            port: 8545,
            network_id: '*' // Match any network id
        },
        live: {
            host: "192.168.1.104",
            port: 30303,
            network_id: 1123       // Ethereum public network
            // optional config values:
            // from - default address to use for any transaction Truffle makes during migrations
            // provider - web3 provider instance Truffle should use to talk to the Ethereum network.
            //          - if specified, host and port are ignored.
        }
    }
};