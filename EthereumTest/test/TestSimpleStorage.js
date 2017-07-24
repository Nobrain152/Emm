var SimpleStorage = artifacts.require('./SimpleStorage.sol');   // 智能合约对象

contract('SimpleStorage', function (accounts) {
    for (var i = 0; i < 1; i++) {
        it('What we get should be the same as what we set', function () {
            var data = 10;
            var storage = null;
            var start = new Date();
            return SimpleStorage.deployed().then(function (instance) {
                storage = instance;
                return storage.set(data, {from: accounts[0]});
            }).then(function () {
                return storage.get.call(accounts[0]);
            }).then(function (testData) {
                assert.equal(testData, data, "We don't get what we put");
            }).then(function() {
                var end = new Date();
                var time = end - start;
                console.log("   test time is: " + time);
            })
        })
    }
});
