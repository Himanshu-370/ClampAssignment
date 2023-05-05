import React from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Button } from "@mui/material";

import useStyles from "../styles";

const ConnectBtn = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <ConnectButton.Custom>
        {({
          account,
          chain,
          openAccountModal,
          openChainModal,
          openConnectModal,
          authenticationStatus,
          mounted,
        }) => {
          const ready = mounted && authenticationStatus !== "loading";
          const connected =
            ready &&
            account &&
            chain &&
            (!authenticationStatus || authenticationStatus === "authenticated");

          return (
            <div
              {...(!ready && {
                "aria-hidden": true,
                style: {
                  opacity: 0,
                  pointerEvents: "none",
                  userSelect: "none",
                },
              })}
            >
              {(() => {
                if (!connected) {
                  return (
                    <Button
                      onClick={openConnectModal}
                      type="button"
                      className={classes.buyNowBtn}
                    >
                      Connect Wallet
                    </Button>
                  );
                }

                if (chain.unsupported) {
                  return (
                    <ConnectButton onClick={openChainModal} type="button">
                      Wrong network
                    </ConnectButton>
                  );
                }

                return (
                  <div style={{ display: "flex", gap: 12 }}>
                    <ConnectButton
                      onClick={openChainModal}
                      style={{
                        display: "flex",
                        alignItems: "center",
                      }}
                      type="button"
                    >
                      {chain.hasIcon && (
                        <div
                          style={{
                            background: chain.iconBackground,
                            width: 12,
                            height: 12,
                            borderRadius: 999,
                            overflow: "hidden",
                            marginRight: 4,
                          }}
                        >
                          {chain.iconUrl && (
                            <img
                              alt={chain.name ?? "Chain icon"}
                              src={chain.iconUrl}
                              style={{ width: 12, height: 12 }}
                            />
                          )}
                        </div>
                      )}
                      {chain.name}
                    </ConnectButton>
                  </div>
                );
              })()}
            </div>
          );
        }}
      </ConnectButton.Custom>
    </React.Fragment>
  );
};

export default ConnectBtn;
