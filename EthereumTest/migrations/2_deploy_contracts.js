var SimpleStorage = artifacts.require("./SimpleStorage.sol");
var KvStorage = artifacts.require("./KvStorage.sol");
var Transaction = artifacts.require('./Transaction.sol');

module.exports = function(deployer) {
  deployer.deploy(SimpleStorage);
  deployer.deploy(KvStorage);
  deployer.deploy(Transaction);
};
