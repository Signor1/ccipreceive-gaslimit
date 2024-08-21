// Load and configure environment variables from a .env file.
import * as dotenvenc from '@chainlink/env-enc';
dotenvenc.config();
import { ethers } from 'ethers';
// Configuration details for CCIP
import { getCCIPConfig } from '../ccip.config';
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
async function estimateGas(
  gasUsageParameters: number[],
): Promise<{ iterations: number; gasUsed: string }[]> {
  const ethereumSepoliaRouterAddress = getCCIPConfig('ethereumSepolia').router;
  const avalancheFujiChainSelector =
    getCCIPConfig('avalancheFuji').chainSelector;
  const senderAddress = testData.avalancheFuji.sender;
  const receiverAddress = testData.ethereumSepolia.receiver;
  const ethereumSepoliaRpcUrl = process.env.ETHEREUM_SEPOLIA_RPC_URL;
  const provider = new ethers.JsonRpcProvider(ethereumSepoliaRpcUrl);
  const gasUsageReport = [];

  for (const iterations of gasUsageParameters) {
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
    gasUsageReport.push({ iterations, gasUsed: ccipReceiveGas.toString() });
  }

  return gasUsageReport;
}

// Call the `estimateGas` function and catch any errors.
estimateGas([0, 50, 99]).catch(console.error);

/*
const gasUsageParameters = [
  0, // minimum
  50, // average
  99, // maximum
];
*/

// Follow this guideline to execute this script
// npm install
// npm run GasEstimate
