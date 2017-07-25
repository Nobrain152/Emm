/**
 * Created by Administrator on 2017/7/24.
 */
var Transaction = artifacts.require('./Transaction.sol');

contract('Transaction', function (accounts) {
    for (var i = 0; i < 1; i++) {
        it("A should send coin to B correctly", function () {
            var trans;
            var account_A = accounts[0];
            var account_B = accounts[1];

            var origin_A;
            var origin_B;
            var finish_A;
            var finish_B;

            var start;
            var end;
            var amount = 10;

            return Transaction.deployed().then(function (instance) {
                trans = instance;
                return trans.getBalance.call(account_A);
            }).then(function (balance) {
                origin_A = balance.toNumber();
                return trans.getBalance.call(account_B);
            }).then(function (balance) {
                origin_B = balance.toNumber();
                start = new Date();
                return trans.sendCoin(account_B, amount, {from: account_A});
            }).then(function () {
                end = new Date();
                return trans.getBalance.call(account_A);
            }).then(function (balance) {
                finish_A = balance.toNumber();
                return trans.getBalance.call(account_B);
            }).then(function (balance) {
                finish_B = balance.toNumber();
                assert.equal(finish_A, origin_A - amount, "Fail transaction from the sender");
                assert.equal(finish_B, origin_B + amount, "Fail transaction to the receiver");
                var time = end - start;
                console.log("   test time is: " + time);
            });
        });

    }
});