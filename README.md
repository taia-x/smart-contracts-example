# Counter Example

A `Counter` contract to display the basics of Tezos LIGO integration and deployment.

## Prerequisites

- [Docker](https://docs.docker.com/v17.12/install/)
  - Used for LIGO compilations and running a local sandbox Tezos node.
- [NodeJS](https://nodejs.org/en/)

## Usage

- Compiling the example smart contracts

  ```shell
  yarn run compile
  ```

- Starting the local sandbox Tezos node

  ```shell
  yarn run start-sandbox
  ```

- Deploying contracts on local sandbox

  ```shell
  yarn run deploy:sandbox
  ```

- OR: Deploying contracts on testnet (faucet must be obtained as explained at the bottom)

  ```shell
  yarn run deploy:testnet
  ```

## Sandbox Management

A sandbox Tezos node is provided with RPC exposed at port `20000` and two accounts alice and bob.

## Interacting with Sandbox Network

- A secret can be obtained by running sandbox-info and import secret (only alice is needed) inside `config/sandbox.config.js`

```shell
yarn run sandbox-info
```

## Interacting with Live Network

- A test faucet key can be obtained from https://faucet.tzalpha.net/. Once saved, it can be imported inside faucet key of `config/testnet.config.js`
