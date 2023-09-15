require("@nomicfoundation/hardhat-toolbox");
let PrivateKey = "13b110e7ac194d2827d04f17c11726068bb2dc19b595b5a33acaf7fc15604e1b"

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  networks:{
    bscTestnet:{
      url:"https://data-seed-prebsc-1-s1.binance.org:8545/",
      accounts:[PrivateKey],
    }
  },
  etherscan: {
    apiKey: {
      bscTestnet: 'W822W2CBW7D7TT4JMS296KRCDB8HTHNJV3'
    }
  }
};
