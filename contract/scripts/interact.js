const API_KEY = process.env.API_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS;

const { ethers } = require("hardhat");
const contract = require("../artifacts/contracts/HelloWorld.sol/HelloWorld.json");

// Provider
const alchemyProvider = new ethers.providers.AlchemyProvider("goerli", API_KEY);

// Signer
const signer = new ethers.Wallet(PRIVATE_KEY, alchemyProvider);

// Contract
const helloWorldContract = new ethers.Contract(
  CONTRACT_ADDRESS,
  contract.abi,
  signer
);

const main = async () => {
  const message = await helloWorldContract.message();
  console.log("The message is: " + message);

  const tx = await helloWorldContract.update("New message.");
  await tx.wait();

  const newMessage = await helloWorldContract.message();
  console.log("Updated message: " + newMessage);
};

main();
