var KvStorage = artifacts.require('./KvStorage.sol');

contract('KvStorage', function (accounts) {
    for (var i = 0; i < 300; i++) {
        it('What we get should be the same as what we set', function () {
            var data = randomWord(false, 6 * 1024);
            var key = randomWord(false, 128);
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
            }).then(function () {
                var end = new Date();
                var time = end - start;
                // 输出测试时间，这里的时间是自己算的，更加准确
                console.log("   test time is: " + time);
            })
        })
    }
});

function randomWord(randomFlag, min, max) {
    var str = "",
        range = min,
        arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
            'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E',
            'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    // 随机产生
    if (randomFlag) {
        range = Math.round(Math.random() * (max - min)) + min;
    }
    for (var i = 0; i < range; i++) {
        var pos = Math.round(Math.random() * (arr.length - 1));
        str += arr[pos];
    }
    return str;
}