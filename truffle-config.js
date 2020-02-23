require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid nation flock system egg develop remember hospital half climb tail gather'; 
let testAccounts = [
"0x24825334ee79f90827b3dca3e7a240621c1702488fe5e4783282feb10cdfba50",
"0xf2392265e0c3af8203375d977de5baddc63a348ebe9af6d8ae3f9cfd97c0bbb9",
"0x33c3984d5fdb4fcc82259080bb0b75526e80f90f1e38a6d623337a56d9611951",
"0x7fe86033174617bdd60e76e7dfffca65c8382695be131a3b9e9364ed9edd649e",
"0x3b8e4cececf15222f869d7f55a275310bcd3feadd25c21c9725b6e01160557a1",
"0x56baff46e217af9397e7b5b87d285afa1d2a1e01f2d87f28317db4d32e68a5cb",
"0x25a70c332704392bd5e59f8a3230ce48f3fae32a1a5c2ee12df3515971303533",
"0x22334246eff0b388564913b9451fde81c8d8992a7138b9137d75f1c9c27b92fa",
"0x0426c959ed3c2f44e13bad584f617a370768b3f316095fc93a7978a169cae708",
"0x9bc238685df738906b3190632320473ad15717eb04ed9e0a0f35c888e38a8b7b"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                testAccounts,
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
            version: '^0.5.11'
        }
    }
};
