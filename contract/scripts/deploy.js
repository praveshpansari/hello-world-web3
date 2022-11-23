const { ethers } = require("hardhat");

const main = async () => {
  const HelloWorld = await ethers.getContractFactory("HelloWorld");

  // Starts deployment, returns a promise of a contract object
  const hello_world = await HelloWorld.deploy("Hello World!");
  console.log("Contract deployed to address:", hello_world.address);
};

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });

//0x11F2766d3511131EB82C8dac97cEAe71Ad1c27f0
