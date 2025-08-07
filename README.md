
# 🌱 TupuPlatform MVP

**Transparent Climate Finance Tracking Using Blockchain**  
An open-source MVP prototype built on the Polygon Amoy testnet using Solidity smart contracts and Foundry.

---

## 📌 Project Objective

TupuPlatform is a blockchain-based system for managing and monitoring climate adaptation projects in Samoa and the Pacific.

It enables:

- Transparent tracking of donor funds
- Tokenized representation of project budgets (1:1 to escrowed funds)
- Smart contract–based deliverable validation and approval
- Role-based project access for funders, clients, and contractors
- A foundation for future carbon tracking and risk analysis tools

---

## 🧱 MVP Smart Contract Modules (Planned)

- `TupuFinance.sol`: Core fund/milestone/payment logic
- `TupuRegistry.sol`: Role and identity registration
- `ProjectToken.sol`: Token to represent project-specific budgets
- `DeliverableVault.sol`: Submit and verify proof-of-deliverables

---

## 🛠 Tech Stack

- **Foundry** (Solidity toolchain)
- **Polygon Amoy** testnet
- **IPFS / Pinata** (Planned for file validation)
- **Google Cloud / Firebase** (Future off-chain integration)

---

## 📦 Status

This repository has been initialized with the development environment, and the smart contract architecture is being implemented.

Smart contract testing and simulations will begin with on-chain logic for token-based fund tracking and milestone verification.

We are using this repo as the official build environment for SPREP's PCCC Climate Innovation MVP.

---

## 🧪 Local Development Setup

```bash
git clone https://github.com/YourGitHub/TupuPlatform.git
cd TupuPlatform
forge install
forge build
=======
# TupuPlatform 🌱

**Decentralized Climate Finance Monitoring System**  
Built on **Polygon Amoy** using **Foundry**, Solidity smart contracts, and tokenized project finance.

## 📦 Overview

TupuPlatform provides a transparent, blockchain-based solution to manage and monitor climate adaptation projects with the following features:

- Tokenized Climate Finance Instruments (CFI)
- Escrow-based project payment logic
- Carbon footprint calculation backend
- Immutable tracking of deliverables and payments
- Transparent dashboards for stakeholders and funders

## 🔧 Stack

- [Foundry](https://book.getfoundry.sh/)
- Solidity `^0.8.21`
- Polygon Amoy testnet (EVM compatible)
- IPFS / GCP (for off-chain components, future)
- GitHub Projects (for issue tracking & milestones)

Contributors
Anthony Williams — Lead Developer (Blockchain)
Suetena Loia — Technical Advisor & Project Mentor Developer / Cyber Security 
Vensel Margraff — Engineering Support & Research Proposal and community support Civil Engineer.

## 🚀 Getting Started

### Setup

```bash
git clone https://github.com/Hamobcdev/TupuPlatform.git
cd TupuPlatform
forge install
cp .env.example .env


## Foundry

**Foundry is a blazing fast, portable and modular toolkit for Ethereum application development written in Rust.**

Foundry consists of:

-   **Forge**: Ethereum testing framework (like Truffle, Hardhat and DappTools).
-   **Cast**: Swiss army knife for interacting with EVM smart contracts, sending transactions and getting chain data.
-   **Anvil**: Local Ethereum node, akin to Ganache, Hardhat Network.
-   **Chisel**: Fast, utilitarian, and verbose solidity REPL.

## Documentation

https://book.getfoundry.sh/

## Usage

### Build

```shell
$ forge build
```

### Test

```shell
$ forge test
```

### Format

```shell
$ forge fmt
```

### Gas Snapshots

```shell
$ forge snapshot
```

### Anvil

```shell
$ anvil
```

### Deploy

```shell
$ forge script script/Counter.s.sol:CounterScript --rpc-url <your_rpc_url> --private-key <your_private_key>
```

### Cast

```shell
$ cast <subcommand>
```

### Help

```shell
$ forge --help
$ anvil --help
$ cast --help
```

