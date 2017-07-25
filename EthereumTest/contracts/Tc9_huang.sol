pragma solidity ^0.4.0;


contract Tc9_huang {
    mapping (string => string) store;

    function get(string key) constant returns (string) {
        return store[key];
    }

    function put(string key, string value) {
        store[key] = value;
    }

}

