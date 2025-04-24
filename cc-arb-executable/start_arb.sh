#!/bin/bash

export LOGGER_LEVEL=info
export RPC_URL= #YOUR_RPC_URL
export SEND_TXN_RPC_URL= #YOUR_RPC_URL
export QUOTE_REQUEST_INTERVAL_MS=15
export DEFAULT_SOL_PRICE=200
export CHECK_ATA_RPC_URL= #YOUR_RPC_URL
#export PROXY_TYPE=socks5 #if your proxy type support socls5 you should enable


# Execute the constructed command
CMD="./cc-arbitrage-bot"

taskset -c "$TASKSET_RANGE" "$CMD"
