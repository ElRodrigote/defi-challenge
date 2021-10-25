type txConfigProps = {
  txDetails: any;
  balance: string;
  gasPrice: () => Promise<string>;
  sendTransaction: () => any;
};

type sendTokenTransactionProps = {
  notify: any;
  emitterLoading: (arg: boolean) => void;
  txConfig: txConfigProps;
};

/**
 * This function handles transaction notifications
 * on the frontend via popups, internally checking
 * the TX status in the mempool.
 */
const sendTokenTransaction = async ({
  emitterLoading,
  notify,
  txConfig,
}: sendTokenTransactionProps) => {
  const { balance, gasPrice, sendTransaction, txDetails } = txConfig;
  const { emitter } = notify.transaction({
    balance,
    gasPrice,
    sendTransaction,
    txDetails,
  });

  /**
   * We use this `emitter` to listen on different tx events,
   * so we can update the TX status and enable/disable the
   * transactional buttons for `Approve` and `Transfer` tokens.
   * This way we avoid multi-clicking the same button.
   */
  emitter.on("txRequest", () => {
    emitterLoading(true);
  });
  emitter.on("txConfirmed", () => {
    emitterLoading(false);
  });
  emitter.on("txFailed", () => {
    emitterLoading(false);
  });
  emitter.on("txError", () => {
    emitterLoading(false);
  });
  emitter.on("txSendFail", () => {
    emitterLoading(false);
  });
  emitter.on("txUnderPriced", () => {
    emitterLoading(false);
  });
  emitter.on("nsfFail", () => {
    emitterLoading(false);
  });
};

export default sendTokenTransaction;
