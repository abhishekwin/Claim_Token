// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

interface IERC20 {
    function transfer(address recipient, uint256 amount) external returns (bool);
    function balanceOf(address account) external view returns (uint256);
}

contract TokenClaim {
    address public token;
    uint256 public claimTime;
    address public owner;

   event Claimed(address _user,uint256 _amount);
    mapping(address =>uint256) public availableToken;

    constructor(address _token, uint256 _claimTime) {
        token = _token;
        claimTime = _claimTime;
        owner = msg.sender;
    }

    function setToken(address user, uint256 amount) public  {
        require(msg.sender == owner,"Only Owner can call this Function");
        availableToken[user]=amount;
    }

    function claimTokens(uint256 amount) external {
        require(block.timestamp >= claimTime, "Claim time has not yet passed");
      

        IERC20 erc20Token = IERC20(token);

        require(availableToken[msg.sender] > amount, "No tokens available for claim");

       
        erc20Token.transfer(msg.sender, amount);
        availableToken[msg.sender]-=amount;
        emit Claimed(msg.sender,amount);
        
    }
}
