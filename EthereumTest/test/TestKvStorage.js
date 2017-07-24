var KvStorage = artifacts.require('./KvStorage.sol');

contract('KvStorage', function (accounts) {
    for (var i = 0; i < 1; i++) {
        it('What we get should be the same as what we set', function () {
            var data = '233';
            var key = '1';
            var storage = null;
            var start = new Date();
            return KvStorage.deployed().then(function (instance) {
                storage = instance;
                // 没有返回值的函数这样测试：
                return storage.put(key, data, {from: accounts[0]});
            }).then(function () {
                // 有返回值的函数这样测试：
                return storage.get.call(key, {from: accounts[0]});
            }).then(function (testData) {
                assert.equal(testData, data, "We don't get what we put");
            }).then(function() {
                var end = new Date();
                var time = end - start;
                // 输出测试时间，这里的时间是自己算的，更加准确
                console.log("   test time is: " + time);
            })
        })
    }
});