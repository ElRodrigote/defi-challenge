# DeFi Wonderland Challenge

Welcome! :wave:

This is my approach to solve [DeFi Wonderland](https://defi.sucks/) Frontend challenge.

Having zero experience developing web3 projects made this a huge challenge for me to wrap my head around. In my path I learned about alternative tools like [ethers.js](https://docs.ethers.io/v5/) :eyes: that would have made my work much easier. The good thing I didn't use it? Learning a lot about what's happening under the hood! :raised_hands:

## Some Tools

Ok so, many things happening here. Some tools I've used for this project:

- `React with Typescript` - To handle rendering and types in general.
- `Material-UI` - Component bootstrapping, visual theme handling and layouting. Extra Points: I learned Vercel doesn't like default MUI extended theme by default.
- `React Router` - To handle route changes (not really used in this app tho).
- `BigNumber.js` - Used to convert data as most token balances may fall into big numbers due to their decimal places.
- `Blocknative` - In particular I used Onboard and Notify, to handle Wallet connection and TX status notifications.
- `Web3.js` - Using this library to interact with contracts and Ethereum blockchain.
- `Vercel` - Here I deployed my project to go live!

And that's pretty much it regarding tooling in general.

## So... how does it work?

Very simple!

You can click [this link right here](https://defi-challenge-7wgoqfobc-rodrigojali.vercel.app/) to watch the deployed version in Vercel.

But if you would like to run it locally and take a look into the code, a few preconditions:

- Have Metamask (or any Ethereum wallet) installed in your device
- Create a wallet, and connect it to Rinkeby Testnet
- Click [in this link](https://faucet.rinkeby.io/) so you can claim some FREE! tokens :exploding_head: from Rinkeby Faucet
- Follow [these instructions](https://ethereum.stackexchange.com/a/84720) to claim a few $DAI and $USDC tokens from Compound Faucet
- You're ready to go!

After those preconditions are met, you're ready to follow these steps and run this project locally:

1. Clone this repository in your local computer
2. Run `yarn install` in your favorite terminal so you can get all the dependencies, and maybe go for a tea :tea: or maybe a mate :mate: because it takes a few minutes
3. After installation is done, run `yarn start` and wait for the magic :sparkles: to happen
