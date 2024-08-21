# Cross Chain USDC Transfer

> **Note**
>
> _This repository is created for the purpose of doing an assignment for the Chainlink Bootcamp._

> **For Judges** _The solutions are available in *[scripts](scripts)* dir._

## Steps to Run

1. Set up the environment variables using `npx env-enc set` and provide the values for the PRIVATE_KEY, ETHEREUM_SEPOLIA_RPC_URL, AVALANCHE_FUJI_RPC_URL, ETHERSCAN_API_KEY

2. Run `npm install` to install the dependencies.

3. Run `npm run estimate` to estimate the gas cost for the transaction.

The gas cost is around 429,405 gas. With 10% buffer, the gas cost is around 472,345 gas.
