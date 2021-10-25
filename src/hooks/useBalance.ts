import { useEffect, useState } from "react";

import { getCustomTokenContract } from "utils";
import { IERC20Token } from "utils/interfaces";

/**
 * For any kind of error when trying to fetch our wallet
 * token balance, we return a "0" balance.
 */
const ERROR_RETURN_VALUE = "0";

const useBalance = (account: string = "", selectedToken: IERC20Token) => {
  const [balanceInWei, setBalanceInWei] = useState("0");
  const [isBalanceLoading, setIsBalanceLoading] = useState(false);

  useEffect(() => {
    const getBalance = async () => {
      return new Promise((resolve: any) => {
        if (!(account && selectedToken.address)) {
          resolve(ERROR_RETURN_VALUE);
          return;
        }

        try {
          /**
           * First we get a contract instance for the
           * selected token to operate
           */
          const ERC20contract = getCustomTokenContract(
            selectedToken.abi,
            selectedToken.address
          );

          /**
           * And call the ERC20 `balanceOf()` method on our
           * account, sowe get a big number parsed into string
           */
          ERC20contract?.methods
            .balanceOf(account)
            .call()
            .then((balance: string) => {
              resolve(balance);
            })
            .catch((error: any) => {
              console.log(
                "Error while fetching custom token balnance: ",
                error
              );
              resolve(ERROR_RETURN_VALUE);
            });
        } catch (error) {
          console.log(
            "Error while connecting to connect to the smart contract: ",
            error
          );
          resolve(ERROR_RETURN_VALUE);
        }
      });
    };

    /**
     * Then we call our `getBalance()` and handle the loading
     * states while we wait forthe promise to resolve.
     */
    const fetchBalance = async () => {
      setIsBalanceLoading(true);
      const balanceInWei = await getBalance();

      setIsBalanceLoading(false);
      setBalanceInWei(balanceInWei as string);
    };

    fetchBalance();
  }, [account, selectedToken]);

  /**
   * The balance is not really in wei, but I choose this
   * naming over `balanceInBigNumber` for simplicity sake.
   * We return that big number balance parsed to string,
   * and the loading status for that call.
   */
  return [balanceInWei, isBalanceLoading];
};

export default useBalance;
