pragma solidity ^0.4.0;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/SimpleStorage.sol";

contract TestSimpleStorage {
    function testStoresValue() {
        SimpleStorage simpleStorage = SimpleStorage(DeployedAddresses.SimpleStorage());


        uint data = 1;
        uint getter;
        for (uint i = 0; i < 1; i++) {
            data ++;
            simpleStorage.set(data);
            getter = simpleStorage.get();
            Assert.equal(getter, data, "storage error");
        }

    }

}
