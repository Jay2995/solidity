
const hre = require("hardhat");

async function main() {
  const JoseToken = await hre.ethers.getContractFactory("JoseToken");
  const joseToken = await JoseToken.deploy(100000000, 50)

  await joseToken.deployed()
  console.log("TOKEN DEPLOYED:", joseToken.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
