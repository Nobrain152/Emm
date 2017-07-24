var SimpleStorage = artifacts.require("./SimpleStorage.sol");
var KvStorage = artifacts.require("./KvStorage.sol");

module.exports = function(deployer) {
  deployer.deploy(SimpleStorage);
  deployer.deploy(KvStorage);
};
