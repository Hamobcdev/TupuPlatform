// SPDX-License-Identifier: MIT
pragma solidity ^0.8.21;

contract TupuFinance {
    address public client;
    uint public projectBudget;
    uint public paidOut;

    constructor(uint _budget) {
        client = msg.sender;
        projectBudget = _budget;
    }

    function releaseFunds(address payable contractor, uint amount) external {
        require(msg.sender == client, "Not authorized");
        require(amount + paidOut <= projectBudget, "Exceeds budget");

        paidOut += amount;
        contractor.transfer(amount); // Simulated logic only, no real Ether here
    }
}
