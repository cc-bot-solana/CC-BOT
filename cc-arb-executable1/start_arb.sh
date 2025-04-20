#!/bin/bash

export LOGGER_LEVEL=info
export JUPITER_URL=http://127.0.0.1:5053
export JUPITER_SWAP_URL=http://127.0.0.1:5053
export RPC_URL= #YOUR_RPC_URL
export SEND_TXN_RPC_URL= #YOUR_RPC_URL
export QUOTE_REQUEST_INTERVAL_MS=15
export MAX_RETRIES=0
export USE_SERVER_IP_WITH_PROXY_WALLETS=false
export USE_MAIN_WALLET=false
export PROXY_FILE=./proxies.txt
export BIND_IP_FILE=./bindIPs.txt
export DEFAULT_SOL_PRICE=200
export CHECK_ATA_RPC_URL= #YOUR_RPC_URL



# Execute the constructed command
CMD="./cc-arbitrage-bot"

taskset -c '7-15' "$CMD" #This is an example prepared for a Ryzen 7950x CPU with 16 cores and 32 threads — you can adjust these parts according to your own setup.
