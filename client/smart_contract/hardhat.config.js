require ('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.9',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/WSNs0L9uBnjeXRj6T9luNEps5RoBbqUC',
      accounts: [
        'f395cb7ac0edf3128962a906cfcbcbb21be9b6ebdb46ca41434a3d5aba7dedd7',
      ],
    },
  },
}