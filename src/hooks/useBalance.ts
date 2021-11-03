import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getCustomTokenContract } from "utils";
import { RootState } from "redux/types";
import {
  setIsBalanceLoading,
  setSelectedTokenBalance,
} from "redux/reducers/balance";

/**
 * For any kind of error when trying to fetch our wallet
 * token balance, we return a "0" balance.
 */
const ERROR_RETURN_VALUE = "0";

const useBalance = () => {
  const dispatch = useDispatch();
  const selectedToken = useSelector(
    ({ tokens }: RootState) => tokens.selectedToken
  );
  const spenderWallet = useSelector(
    ({ wallets }: RootState) => wallets.spenderWallet
  );

  useEffect(() => {
    const getBalance = async () => {
      return new Promise((resolve: any) => {
        if (!(spenderWallet && selectedToken.address)) {
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
           * spenderWallet, sowe get a big number parsed into string
           */
          ERC20contract?.methods
            .balanceOf(spenderWallet)
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
      dispatch(setIsBalanceLoading(true));

      const balanceInWei = await getBalance();

      /**
       * The balance is not really in wei, but I choose this
       * naming over `balanceInBigNumber` for simplicity sake.
       * We set in Redux that big number balance parsed to string,
       * and the loading status for that call.
       */
      dispatch(setIsBalanceLoading(false));
      dispatch(setSelectedTokenBalance(balanceInWei as string));
    };

    fetchBalance();
  }, [dispatch, selectedToken, spenderWallet]);
};

export default useBalance;
