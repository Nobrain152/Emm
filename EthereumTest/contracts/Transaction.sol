pragma solidity ^0.4.0;


contract Transaction {
    //关键字“public”使变量能从合约外部访问。适用于存储合约的地址或其他人的公私钥。
    address public minter;
    //类型更复杂（账户具体信息）
    mapping (address => uint) public balances;

    //事件让轻客户端能高效的对变化做出反应。
    event Sent(address from, address to, uint amount);

    //这个构造函数的代码仅仅只在合约创建的时候被运行。它会永久得存储合约创建者的地址
    function Coin() {
        minter = msg.sender;
    }
    //铸币，只能被minter使用
    function mint(address receiver, uint amount) {
        if (msg.sender != minter) return;
        balances[receiver] += amount;
    }
    //send可以被任何人（拥有一定数量的代币）调用，发送一些币给其他人
    function send(address receiver, uint amount) {
        if (balances[msg.sender] < amount) return;
        balances[msg.sender] -= amount;
        balances[receiver] += amount;
        Sent(msg.sender, receiver, amount);
    }
    //查询某个特定账号的余额
    function balances(address _account) returns (uint balance) {
        return balances[_account];
    }
}
