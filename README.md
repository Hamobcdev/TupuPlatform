
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

## 🌐 User Interface Overview

The UI was designed with a Pacific theme, aiming to communicate transparency and inclusivity in aid funding.

### 🏠 Home Page

- Hero section with background image of Pacific island landscape
- "Connect Wallet" (Polygon Amoy) button
- "Login / Register" for future Supabase integration

![Home Screenshot](./docs/ui/home.png)

---

### 🔧 Admin Dashboard

- Create and manage community projects
- Assign contractors and track progress
- Background image of government planning or infrastructure project

![Admin Dashboard](./docs/ui/admin-dashboard.png)

---

### 👷 Contractor Dashboard

- View assigned projects
- Upload deliverables and mark tasks complete
- Image: Construction or field deployment in Pacific setting

![Contractor Dashboard](./docs/ui/contractor-dashboard.png)

---

### 💼 Funding Agency Dashboard

- View and approve project milestones
- Disburse funds via smart contract triggers
- Background: High-level oversight, offices, or project site visits

![Funder Dashboard](./docs/ui/funding-dashboard.png)

---

### 👥 Public View

- Community project transparency
- Simple interface with open access
- Background image: Local gathering or school/clinic construction

![Public View](./docs/ui/public-view.png)

---

## 🔐 Authentication and Blockchain Integration

- Supabase Auth will handle role-based login (admin, funder, contractor, public)
- Wallet integration via **Polygon Amoy** (testnet) and **Polygon Mainnet** later

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

