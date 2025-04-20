#!/bin/bash
# Find the PID using port 8080
PID=$(lsof -i :$PORT -t)
if [ ! -z "$PID" ]; then
    echo "Killing process $PID using port $PORT..."
    kill -9 $PID
else
    echo "No process is using port $PORT."
fi

export RUST_LOG=info
export EXCLUDE_DEX_PROGRAM_IDS=obriQD1zbpyLz95G5n7nJe6a4DPjpFwa5XYPoNm113y
export YELLOWSTONE_GRPC_ENABLE_PING=true
export ENABLE_ADD_MARKET=true
export ALLOW_CIRCULAR_ARBITRAGE=true
export ENABLE_NEW_DEXES=true
export MARKET_CACHE=https://cache.jup.ag/markets?v=4
export MARKET_MODE=remote #europa, remote, file
export SNAPSHOT_POLL_INTERVAL_MS=50

export HOST=127.0.0.1

#caner
export RPC_URL=http://85.195.90.47:8899
export YELLOWSTONE_GRPC_ENDPOINT=http://85.195.90.47:10000/
export YELLOWSTONE_GRPC_X_TOKEN=xToken



combined_mints=$(jq -s 'add' "./includeMints_wsol.json" "./stables_mints.json" | jq -r '.[]' | sort -u | paste -sd "," -)

export FILTER_MARKETS_WITH_MINTS=$combined_mints

# Execute the constructed command
CMD="./jup/jupiter-swap-api"

taskset -c '24-31' "$CMD"