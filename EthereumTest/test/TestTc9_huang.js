/**
 * Created by T5-SK on 2017/7/25.
 */
var Tc9_huang = artifacts.require('./Tc9_huang.sol');

contract('Tc9_huang', function (accounts) {
    var data = 'a';
    for(var m = 0; m < 6687; m++){
        data += 'a';
    }
    for (var i = 0; i < 1000; i++) {
        it('We should know the max length the block chain can store', function () {

            var key = '1';
            var storage = null;
            var start = new Date();
            return Tc9_huang.deployed().then(function (instance) {
                storage = instance;
                // 没有返回值的函数这样测试：
                return storage.put(key, data, {from: accounts[0]});
            }).then(function() {
                return storage.get.call(key, {from: accounts[0]});
            }).then(function (testData) {
                var end = new Date();
                var time = end - start;
                console.log("   test time is: " + time);
                var length = testData.length;
                console.log("the length of string is :" + length);
                //console.log("string is :" + testData);
                assert.equal(testData, data, 'not correct');
                data += 'a';
            })
        })
    }
});