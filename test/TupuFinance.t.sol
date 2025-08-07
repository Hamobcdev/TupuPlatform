// SPDX-License-Identifier: MIT
pragma solidity ^0.8.21;

import "forge-std/Test.sol";
import "../src/TupuFinance.sol";

contract TupuFinanceTest is Test {
    TupuFinance public tupu;
    address public client;
    address payable public contractor;

    uint256 initialBudget = 10 ether;

    function setUp() public {
        client = address(this); // The test contract is the deployer/client
        contractor = payable(address(0xABCD));

        // Deploy the TupuFinance contract
        tupu = new TupuFinance(initialBudget);
    }

    function testInitialSetup() public {
        assertEq(tupu.client(), client);
        assertEq(tupu.projectBudget(), initialBudget);
        assertEq(tupu.paidOut(), 0);
    }

    function testReleaseFundsToContractor() public {
        uint256 amount = 3 ether;

        // Expect contractor to receive 3 ether (simulated)
        // NOTE: we're not sending real Ether here, just testing logic
        tupu.releaseFunds(contractor, amount);

        assertEq(tupu.paidOut(), amount);
    }

    function testCannotExceedBudget() public {
        uint256 tooMuch = 11 ether;

        vm.expectRevert("Exceeds budget");
        tupu.releaseFunds(contractor, tooMuch);
    }

    function testNonClientCannotReleaseFunds() public {
        address attacker = address(0xDEAD);
        vm.prank(attacker); // Pretend to be someone else

        vm.expectRevert("Not authorized");
        tupu.releaseFunds(contractor, 1 ether);
    }
}
