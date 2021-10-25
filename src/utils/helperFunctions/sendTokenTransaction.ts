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
