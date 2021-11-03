import { combineReducers } from "redux";

import balanceReducer from "./balance";
import tokensReducer from "./tokens";
import walletsReducer from "./wallets";

export default combineReducers({
  balance: balanceReducer,
  tokens: tokensReducer,
  wallets: walletsReducer,
});
