pragma solidity ^0.4.0;


contract SimpleStorage {
    uint value;

    function set(uint _value) {
        value = _value;
    }

    function get() constant returns(uint) {
        return value;
    }
}
