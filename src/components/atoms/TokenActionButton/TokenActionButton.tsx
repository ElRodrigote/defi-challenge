import React from "react";
import LoadingButton from "@mui/lab/LoadingButton";

import useStyles from "./styles";

type TokenActionButtonProps = {
  children: React.ReactChild;
  isTransactionLoading: boolean;
  onClick: () => void;
};

const TokenActionButton = ({
  children,
  isTransactionLoading,
  onClick,
}: TokenActionButtonProps) => {
  const classes = useStyles();

  return (
    <LoadingButton
      classes={{ disabled: classes.disabled }}
      disabled={isTransactionLoading}
      fullWidth
      loading={isTransactionLoading}
      onClick={onClick}
      size="large"
      variant="contained"
    >
      {children}
    </LoadingButton>
  );
};

export default TokenActionButton;
