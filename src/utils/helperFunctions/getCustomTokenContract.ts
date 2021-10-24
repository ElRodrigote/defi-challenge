import Web3 from "web3";
import { AbiItem } from "web3-utils";

const provider = window.ethereum;
const web3 = new Web3(provider);

const getCustomTokenContract = (abi: any, address: string) =>
  Boolean(web3) ? new web3.eth.Contract(abi as AbiItem[], address) : null;

export default getCustomTokenContract;
