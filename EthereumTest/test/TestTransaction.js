/**
 * Created by Administrator on 2017/7/24.
 */
var Transaction = artifacts.require('./Transaction.sol');

contract('Transaction', function (accounts) {
    for (var i = 0; i < 1; i++) {
        it('What we get should be the same as what we set', function () {
            var amount = 10;
            var storage = null;
            var start = new Date();
            //AB初始钱
            var origin_A = 0;
            var origin_B = 0;
            var final_A = 0;
            var final_B = 0;
            return Transaction.deployed().then(function (instance) {
                storage = instance;
                origin_A = storage.balances.call(accounts[0],{from: accounts[0]});
                origin_B = storage.balances.call(accounts[1],{from: accounts[1]});
                return storage.send(accounts[1], amount,{from: accounts[0]});
            }).then(function () {
                final_A = storage.balances.call(accounts[0],{from: accounts[0]});
                final_B = storage.balances.call(accounts[1],{from: accounts[1]});
                return final_A;
            }).then(function (testData) {
                assert.equal(testData, origin_A-amount, "We trades failed");
            }).then(function() {
                var end = new Date();
                var time = end - start;
                console.log("   test time is: " + time);
            })
        })
    }
});
