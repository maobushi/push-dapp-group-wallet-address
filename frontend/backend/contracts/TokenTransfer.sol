// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./FungibleToken.sol";

contract TokenTransfer {
    FungibleToken private _token;

    constructor(address tokenAddress) {
        _token = FungibleToken(tokenAddress);
    }

    function transfer(address to, uint256 amount) public {
        require(_token.transferFrom(msg.sender, to, amount), "Transfer failed");
    }
}
