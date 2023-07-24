const Web3 = require('web3')
const HDWalletProvider = require("@truffle/hdwallet-provider");
require("dotenv").config();
const abiToken = require('../artifacts/contracts/DVToken.sol/DVToken.json');
const abi = require('../artifacts/contracts/DesingerVoting.sol/DesingerVoting.json');

// for producting
const privateKeys = [
    process.env.ACCOUNT
]
let provider = new HDWalletProvider(
    privateKeys,
    `https://klaytn-baobab.blockpi.network/v1/rpc/public`,
    0,
    1
);
const web3 = new Web3(provider);

async function mint() {
    try {
        const contract = new web3.eth.Contract(
            abiToken.abi,
            "0x607A7415563Dc6B8bf3fd786638cc027861918b6",
        )
        const tx = await contract.methods.mint("0x8509E248fcca25BA3fe35Be5D3Ad5b20f7380967", "999999999999999999999999999");
        await tx.estimateGas({
            from: "0x895d54c0C99de41b31bc9B1e0b4a92Bc3190d256"
        });
        await tx.send({
            from: '0x895d54c0C99de41b31bc9B1e0b4a92Bc3190d256'
        })
    } catch (e) {
        console.log(e);
    }
}

async function checkBlance() {
    try {
        const contract = new web3.eth.Contract(
            abiToken.abi,
            "0x607A7415563Dc6B8bf3fd786638cc027861918b6",
        )
        const tx = await contract.methods.balanceOf("0x895d54c0C99de41b31bc9B1e0b4a92Bc3190d256").call();
        console.log(tx);
    } catch (e) {
        console.log(e);
    }
}

async function getStatus() {
    try {
        const contract = new web3.eth.Contract(
            abi.abi,
            "0x8509E248fcca25BA3fe35Be5D3Ad5b20f7380967",
        )
        const tx = await contract.methods.imageId("1").call();
        console.log(tx);
    } catch (e) {
        console.log(e);
    }
}

async function approve() {
    try {
        const contract = new web3.eth.Contract(
            abiToken.abi,
            "0x607A7415563Dc6B8bf3fd786638cc027861918b6",
        )
        const tx = await contract.methods.approve("0x8509E248fcca25BA3fe35Be5D3Ad5b20f7380967", "999999999999999999999999999999");
        await tx.estimateGas({
            from: "0x895d54c0C99de41b31bc9B1e0b4a92Bc3190d256",
        });
        await tx.send({
            from: '0x895d54c0C99de41b31bc9B1e0b4a92Bc3190d256'
        })
    } catch (e) {
        console.log(e);
    }
}


async function updateTimeVoting() {
    try {
        const contract = new web3.eth.Contract(
            abi.abi,
            "0x8509E248fcca25BA3fe35Be5D3Ad5b20f7380967",
        )
        const tx = await contract.methods.updateTimeVoting("", "");
        await tx.estimateGas({
            from: "0x895d54c0C99de41b31bc9B1e0b4a92Bc3190d256",
        });
        await tx.send({
            from: '0x895d54c0C99de41b31bc9B1e0b4a92Bc3190d256'
        })
    } catch (e) {
        console.log(e);
    }
}

async function vote() {
    try {
        const contract = new web3.eth.Contract(
            abi.abi,
            "0x8509E248fcca25BA3fe35Be5D3Ad5b20f7380967",
        )
        const tx = await contract.methods.vote("100000000000000000", "1");
        await tx.estimateGas({
            from: "0x895d54c0C99de41b31bc9B1e0b4a92Bc3190d256",
        });
        await tx.send({
            from: '0x895d54c0C99de41b31bc9B1e0b4a92Bc3190d256'
        })
    } catch (e) {
        console.log(e);
    }
}

async function withdraw() {
    try {
        const contract = new web3.eth.Contract(
            abi.abi,
            "0x8509E248fcca25BA3fe35Be5D3Ad5b20f7380967",
        )
        const tx = await contract.methods.withdraw();
        await tx.estimateGas({
            from: "0x895d54c0C99de41b31bc9B1e0b4a92Bc3190d256",
        });
        await tx.send({
            from: '0x895d54c0C99de41b31bc9B1e0b4a92Bc3190d256'
        })
    } catch (e) {
        console.log(e);
    }
}

// mint()
// checkBlance()
// approve()
// vote()
// updateTimeVoting()
// withdraw()
getStatus()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })