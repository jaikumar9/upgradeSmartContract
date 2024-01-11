const { ethers, upgrades } = require('hardhat');



const Proxy = "0xA47932A7ACac044Ee2F83A07125b90A346F172ec";

async function main() {

const BoxV2 = await ethers.getContractFactory("BoxV2");
const boxV2 = await upgrades.upgradeProxy(Proxy, BoxV2);
await boxV2.deployed();
console.log("BoxV2 upgraded:", boxV2.address);

}

main();