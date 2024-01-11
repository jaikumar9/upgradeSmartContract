import { ethers, upgrades } from 'hardhat';
require("@nomicfoundation/hardhat-verify");

async function main() {
    const Box = await ethers.getContractFactory("Box");
    const box = await upgrades.deployProxy(Box, [42], {init: "initialValue"});
    await box.deployed();
    console.log("Box deployed to:", box.address);

    // const BoxV2 = await ethers.getContractFactory("BoxV2");
}
main();
