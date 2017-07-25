var SimpleStorage = artifacts.require("./SimpleStorage.sol");
var KvStorage = artifacts.require("./KvStorage.sol");
var Transaction = artifacts.require('./Transaction.sol');
var Tc9_huang = artifacts.require("./Tc9_huang.sol");

module.exports = function(deployer) {
  deployer.deploy(SimpleStorage);
  deployer.deploy(KvStorage);
  deployer.deploy(Transaction);
  deployer.deploy(Tc9_huang);
};
