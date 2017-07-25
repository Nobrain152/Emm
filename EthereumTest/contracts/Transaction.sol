pragma solidity ^0.4.0;


contract Transaction {

    //类型更复杂（账户具体信息）
    mapping (address => uint) public balances;

    //事件让轻客户端能高效的对变化做出反应。
    event Transfer(address indexed _from, address indexed _to, uint256 _value);

    //这个构造函数的代码仅仅只在合约创建的时候被运行。它会永久得存储合约创建者的地址
    function Transaction() {
        balances[tx.origin] = 100000;
    }
    //send可以被任何人（拥有一定数量的代币）调用，发送一些币给其他人
    function sendCoin(address receiver, uint amount) returns(bool sufficient) {
        if (balances[msg.sender] < amount) return false;
        balances[msg.sender] -= amount;
        balances[receiver] += amount;
        Transfer(msg.sender, receiver, amount);
        return true;
    }
    //查询某个特定账号的余额
    function getBalance(address addr) returns(uint) {
        return balances[addr];
    }
}
