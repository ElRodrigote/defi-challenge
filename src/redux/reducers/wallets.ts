export const SET_SPENDER_WALLET = "SET_SPENDER_WALLET";
export const SET_TARGET_WALLET = "SET_TARGET_WALLET";

interface IWallet {
  spenderWallet: string;
  targetWallet: string;
}

type WalletAction = {
  type: string;
  wallet: string;
};

type WalletDispatchType = (args: WalletAction) => WalletAction;

const initialState: IWallet = {
  spenderWallet: "",
  targetWallet: "",
};

const walletsReducer = (
  state: IWallet = initialState,
  action: WalletAction
): IWallet => {
  switch (action.type) {
    case SET_SPENDER_WALLET: {
      return {
        ...state,
        spenderWallet: action.wallet,
      };
    }

    case SET_TARGET_WALLET: {
      return {
        ...state,
        targetWallet: action.wallet,
      };
    }

    default:
      return state;
  }
};

export const setSpenderWallet =
  (wallet: string) => (dispatch: WalletDispatchType) =>
    dispatch({
      type: SET_SPENDER_WALLET,
      wallet,
    });

export const setTargetWallet =
  (wallet: string) => (dispatch: WalletDispatchType) =>
    dispatch({
      type: SET_TARGET_WALLET,
      wallet,
    });

export default walletsReducer;
