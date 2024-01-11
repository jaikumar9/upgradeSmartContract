// require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-ethers");
// require("@openzeppelin/hardhat-upgrades");
require("@nomiclabs/hardhat-etherscan");
require('@openzeppelin/hardhat-upgrades');
require('dotenv').config();
// require('.dotenv');

// /** @type import('hardhat/config').HardhatUserConfig */
// module.exports = {
//   solidity: "0.8.10",
//   networks: {
//     sepolia: {
//       url: `https://eth-sepolia.g.alchemy.com/v2/${process.env.Alchemy_API_KEY}`,
//       accounts: [process.env.PRI_KEY],
//     },
//   },
//   etherscan: {
//     apiKey: process.env.ethersepolia_API_KEY,
//   },
// };

module.exports = {
  defaultNetwork: "sepolia",
  networks: {
    hardhat: {
    },
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/sH2qOGG3Mdrdbv2IQJK87xs1SMHXwIbr",
      accounts: ["d7b575b7af8fdded87b6ad443d6b82c585611cf7d5b3778e10c7c4de8f9bc7be"]
    }
  },
  etherscan: {
    apiKey:{ 
      sepolia :"PJRRZZ8HWBWD91EBYBNR3GBRA1swQXU8Y4"},
  },
  solidity: {
    version: "0.8.0",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
};