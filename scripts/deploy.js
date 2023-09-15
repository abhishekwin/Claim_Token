// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
  const MyToken = await hre.ethers.deployContract("MyToken");

  await MyToken.waitForDeployment();
  console.log("ERC20 Deployed At:- ", MyToken.target);


  const lock = await hre.ethers.deployContract("TokenClaim",[  MyToken.target,1689768627]);

  await lock.waitForDeployment();
  console.log("Deployed At:- ",lock.target);
}
// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
