export const SET_AMOUNT_TO_TRANSFER = "SET_AMOUNT_TO_TRANSFER";
export const SET_IS_BALANCE_LOADING = "SET_IS_BALANCE_LOADING";
export const SET_TOKEN_BALLANCE = "SET_TOKEN_BALLANCE";

interface IBalance {
  amountToTransfer: string;
  isBalanceLoading: boolean;
  selectedTokenBalance: string;
}

type BalanceAction = {
  type: string;
  balance?: string;
  isLoading?: boolean;
};

type BalanceDispatchType = (args: BalanceAction) => BalanceAction;

const initialState: IBalance = {
  amountToTransfer: "",
  isBalanceLoading: false,
  selectedTokenBalance: "0",
};

const balanceReducer = (
  state: IBalance = initialState,
  action: BalanceAction
): IBalance => {
  switch (action.type) {
    case SET_AMOUNT_TO_TRANSFER: {
      return {
        ...state,
        amountToTransfer: action.balance as string,
      };
    }

    case SET_IS_BALANCE_LOADING: {
      return {
        ...state,
        isBalanceLoading: action.isLoading as boolean,
      };
    }

    case SET_TOKEN_BALLANCE: {
      return {
        ...state,
        selectedTokenBalance: action.balance as string,
      };
    }

    default:
      return state;
  }
};

export const setAmountToTransfer =
  (balance: string) => (dispatch: BalanceDispatchType) =>
    dispatch({
      type: SET_AMOUNT_TO_TRANSFER,
      balance,
    });

export const setIsBalanceLoading =
  (isLoading: boolean) => (dispatch: BalanceDispatchType) =>
    dispatch({
      type: SET_IS_BALANCE_LOADING,
      isLoading,
    });

export const setSelectedTokenBalance =
  (balance: string) => (dispatch: BalanceDispatchType) =>
    dispatch({
      type: SET_TOKEN_BALLANCE,
      balance,
    });

export default balanceReducer;
