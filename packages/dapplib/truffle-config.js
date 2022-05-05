require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'just problem forget venture strategy deny spider uniform harvest hat army gate'; 
let testAccounts = [
"0x43a5679cf7b782e87f65e03535482695f0b23d7479662d40935b70df880b215f",
"0x57e14a328daaee17fc8624915e540f089abcd62598956397271d97dd37b6efaa",
"0x4ce07a510d759957699749d4464d8c469109b1a3c73c7665b0a724a081e44c77",
"0x7388ea8e6b351dd47b6960b6e0ee9ffe44938e22593c2e2f4391b08300edb16f",
"0x891e11bf4b49ae612b552bdaa29cb3783b5ae81ce205cba56b4e8cc44ce9aa9d",
"0x8e63399ca165563bee42cce55c3cdaa41f939de458c42d33c080a5217d70d811",
"0x5b6b11e1d36aa7d8e9a228bf52e2ca1020b947b658c2e7324ed5a70191ad67e9",
"0xabb1cb955029a2f55f1b551224b38b88b35609923597624029e61a636ed056fe",
"0xaf097f6fd4c824519802810ba58f19a213400da583e9170be5f827bd9f42ae8b",
"0xc50925259b0f9ca1978a14648f0586c69d03758e75f4cd2d95cd723c116dbcf3"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

