# Chainlink CCIP Gas Estimation and TransferUSDC Update

This repository contains a script to estimate the gas consumption of the `ccipReceive` function and increase the gas limit for the `transferUsdc` function by 10%. The increased gas limit is used to ensure the `transferUsdc` function has enough gas for execution.

## Project Structure

- **`GasEstimate.ts`**: This script estimates the gas used by the `ccipReceive` function, increases it by 10%, and logs the results.
- **`config.ts`**: Configuration file for the CCIP settings.
- **`helper.ts`**: Helper functions for building transaction data and estimating intrinsic gas.

## Prerequisites

- Node.js
- npm
- An Ethereum Sepolia RPC URL (place it in a `.env` file)

## Getting Started

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/Signor1/ccipreceive-gaslimit.git
   cd ccipreceive-gaslimit
   ```

2. **Install Dependencies:**

   ```bash
   npm install
   ```

3. **Set Up Environment Variables:**

   For the script, create a `.env` file in the root of your project and add your Ethereum Sepolia RPC URL:

   ```env
   ETHEREUM_SEPOLIA_RPC_URL=<Your Ethereum Sepolia RPC URL>
   ```

4. **Run the Script:**

   Use the following command to estimate the gas usage and calculate the increased gas limit:

   ```bash
   npm run estimate
   ```

   The script will output the estimated gas used by the `ccipReceive` function and the increased gas limit.

## Usage Example

The script will log the following:

- The estimated gas used by the `ccipReceive` function.
- The gas limit after applying a 10% increase.

You can then use the `increasedGasLimit` in the `transferUsdc` contract function as shown in the commented section of the script:

```typescript
const transferUsdcTx = await transferUsdcContract.transferUsdc(
  destinationChainSelector,
  receiverAddress,
  amount,
  increasedGasLimit.toString()
);
```
