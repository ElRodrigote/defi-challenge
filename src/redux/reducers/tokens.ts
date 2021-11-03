import { IERC20Token } from "utils/interfaces";
import { rinkebyTokenList } from "utils";

export const SET_SELECTED_TOKEN = "SET_SELECTED_TOKEN";

interface ITokens {
  rinkeby: IERC20Token[];
  selectedToken: IERC20Token | null;
}

type TokenAction = {
  type: string;
  token: IERC20Token;
};

type TokenDispatchType = (args: TokenAction) => TokenAction;

const initialState: ITokens = {
  rinkeby: rinkebyTokenList,
  selectedToken: rinkebyTokenList[0],
};

const tokensReducer = (
  state: ITokens = initialState,
  action: TokenAction
): ITokens => {
  switch (action.type) {
    case SET_SELECTED_TOKEN: {
      return {
        ...state,
        selectedToken: action.token,
      };
    }

    default:
      return state;
  }
};

export const setSelectedToken =
  (token: IERC20Token) => (dispatch: TokenDispatchType) =>
    dispatch({
      type: SET_SELECTED_TOKEN,
      token,
    });

export default tokensReducer;
