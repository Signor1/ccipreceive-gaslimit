// Load and configure environment variables from a .env file.
import * as dotenvenc from '@chainlink/env-enc';
dotenvenc.config();
import { ethers } from 'ethers';
// Configuration details for CCIP
import { getCCIPConfig } from '../config';
// Helper methods for estimating intrinsic gas & creating transaction data.
import { buildTransactionData, estimateIntrinsicGas } from './helper';

// Test data
const testData = {
  ethereumSepolia: {
    receiver: '0xd9dBe0daa503Caa6e061f1902a7AF22af096E645',
  },
  avalancheFuji: {
    sender: '0xd9dBe0daa503Caa6e061f1902a7AF22af096E645',
  },
};

/**
 * Estimates gas usage for CCIP receive transactions on the Avalanche Fuji testnet with varying iterations.
 *
 * @param {number[]} gasUsageParameters An array of iteration values for which to estimate gas usage.
 * @returns {Promise<{ iterations: number; gasUsed: string }[]>} A promise that resolves with an array of gas usage
 * reports, each containing the iteration and gas cost.
 */
async function estimateGasAndIncreaseGasLimit() {
  const ethereumSepoliaRouterAddress = getCCIPConfig('ethereumSepolia').router;
  const avalancheFujiChainSelector =
    getCCIPConfig('avalancheFuji').chainSelector;
  const senderAddress = testData.avalancheFuji.sender;
  const receiverAddress = testData.ethereumSepolia.receiver;
  const ethereumSepoliaRpcUrl = process.env.ETHEREUM_SEPOLIA_RPC_URL;
  const provider = new ethers.JsonRpcProvider(ethereumSepoliaRpcUrl);

  // Estimate gas for the `ccipReceive` function call
  const iterations = 50; // Using an arbitrary iteration value
  const transactionData = buildTransactionData(
    iterations,
    avalancheFujiChainSelector,
    senderAddress,
  );

  const estimatedGas = await provider.estimateGas({
    to: receiverAddress,
    from: ethereumSepoliaRouterAddress,
    data: transactionData,
  });

  const intrinsicGas = estimateIntrinsicGas(transactionData);
  const ccipReceiveGas = estimatedGas - intrinsicGas;

  console.log(
    `Estimated gas used by ccipReceive: ${ccipReceiveGas.toString()}`,
  );

  // Increase the estimated gas by 10%
  const increasedGasLimit = (ccipReceiveGas * 110n) / 100n;

  console.log(`Gas limit after 10% increase: ${increasedGasLimit.toString()}`);

  /*
  With the increased gas limit, the transferUSDC would look like this:

  const transferUsdcTx = await transferUsdcContract.transferUsdc(
    destinationChainSelector,
    receiverAddress,
    amount,
    increasedGasLimit.toString()
  );

  console.log(transferUsdcTx);
  */

  return increasedGasLimit;
}

// Call the `estimateGas` function and catch any errors.
estimateGasAndIncreaseGasLimit().catch(console.error);

// Follow this guideline to execute this script
// npm install
// npm run estimate
