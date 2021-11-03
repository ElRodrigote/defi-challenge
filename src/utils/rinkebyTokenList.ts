import { ABI_ERC20_DAI, ABI_ERC20_USDC } from "utils";

const rinkebyTokenList = [
  {
    id: 1,
    abi: ABI_ERC20_DAI,
    address: "0x5592EC0cfb4dbc12D3aB100b257153436a1f0FEa",
    decimals: 18,
    name: "DAI Stablecoin",
    symbol: "DAI",
  },
  {
    id: 2,
    abi: ABI_ERC20_USDC,
    address: "0x4DBCdF9B62e891a7cec5A2568C3F4FAF9E8Abe2b",
    decimals: 6,
    name: "USD Coin",
    symbol: "USDC",
  },
];

export default rinkebyTokenList;
