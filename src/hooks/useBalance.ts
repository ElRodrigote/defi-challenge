import { useEffect, useState } from "react";

import { getCustomTokenContract } from "utils";
import { IERC20Token } from "utils/interfaces";

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
          const ERC20contract = getCustomTokenContract(
            selectedToken.abi,
            selectedToken.address
          );

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

    const fetchBalance = async () => {
      setIsBalanceLoading(true);
      const balanceInWei = await getBalance();

      setIsBalanceLoading(false);
      setBalanceInWei(balanceInWei as string);
    };

    fetchBalance();
  }, [account, selectedToken]);

  return [balanceInWei, isBalanceLoading];
};

export default useBalance;
