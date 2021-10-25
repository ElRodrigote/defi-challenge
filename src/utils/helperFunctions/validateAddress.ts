import Web3 from "web3";

const provider = window.ethereum;
const web3 = new Web3(provider);

const validateAddress = (address: string) => web3.utils.isAddress(address);

export default validateAddress;
