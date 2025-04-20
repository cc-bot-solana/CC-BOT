module.exports = {
  apps: [
    {
      name: "arb1", // Note the first bot
      script: "bash",
      args: "./start_arb.sh",
      exec_mode: "fork",
      max_memory_restart: '300M',
      restart_delay: 20000,
      cron_restart: '0 * * * *', // Restart time
      env: {
        APP_UNIQUE_ID: "arb1", 
        PROXY_FILE: "./proxies-1.txt", // Based on the current market conditions, 25 IPs is ideal — anything over 35 is overkill
        TASKSET_RANGE: "0-3", // Note for the ryzen 7950x 16c-32t
        JUPITER_URL: 'http://127.0.0.1:5050', // Note the 5050 port for jup1
        JUPITER_SWAP_URL: "http://127.0.0.1:5050", // Note the 5050 port for jup1
        USE_SERVER_IP_WITH_PROXY_WALLETS:true, // This option should be set to TRUE for only one bot — it must be FALSE for the others
        USE_MAIN_WALLET:true // This option should be set to TRUE for only one bot — it must be FALSE for the others
      }
    },
    {
      name: "arb2", // Note the 2nd bot
      script: "bash",
      args: "./start_arb.sh",
      exec_mode: "fork",
      max_memory_restart: '300M',
      restart_delay: 20000,
      cron_restart: '0 * * * *', // Restart time
      env: {
        APP_UNIQUE_ID: "arb2", 
        PROXY_FILE: "./proxies-2.txt", // Based on the current market conditions, 25 IPs is ideal — anything over 35 is overkill
        TASKSET_RANGE: "3-6", // Note for the ryzen 7950x 16c-32t
        JUPITER_URL: 'http://127.0.0.1:5050',
        JUPITER_SWAP_URL: "http://127.0.0.1:5050", // Note the 5050 port for jup1
        USE_SERVER_IP_WITH_PROXY_WALLETS:false, // This option should be set to TRUE for only one bot — it must be FALSE for the others
        USE_MAIN_WALLET:false // This option should be set to TRUE for only one bot — it must be FALSE for the others
      }
    },
    {
      name: "arb3", // Note the 3rd bot
      script: "bash",
      args: "./start_arb.sh",
      exec_mode: "fork",
      max_memory_restart: '300M',
      restart_delay: 20000,
      cron_restart: '0 * * * *', // Restart time
      env: {
        APP_UNIQUE_ID: "arb3",
        PROXY_FILE: "./proxies-3.txt", // Based on the current market conditions, 25 IPs is ideal — anything over 35 is overkill
        TASKSET_RANGE: "6-9", // Note for the ryzen 7950x 16c-32t
        JUPITER_URL: 'http://127.0.0.1:5051',
        JUPITER_SWAP_URL: "http://127.0.0.1:5051", // Note the 5051 port for jup2
        USE_SERVER_IP_WITH_PROXY_WALLETS:false, // This option should be set to TRUE for only one bot — it must be FALSE for the others
        USE_MAIN_WALLET:false // This option should be set to TRUE for only one bot — it must be FALSE for the others
      }
    },
    {
      name: "arb4", // Note the 4th bot
      script: "bash",
      args: "./start_arb.sh",
      exec_mode: "fork",
      max_memory_restart: '300M',
      restart_delay: 20000,
      cron_restart: '0 * * * *', // Restart time
      env: {
        APP_UNIQUE_ID: "arb4",
        PROXY_FILE: "./proxies-4.txt", // Based on the current market conditions, 25 IPs is ideal — anything over 35 is overkill
        TASKSET_RANGE: "9-12", // Note for the ryzen 7950x 16c-32t
        JUPITER_URL: 'http://127.0.0.1:5051',
        JUPITER_SWAP_URL: "http://127.0.0.1:5051", // Note the 5051 port for jup2
        USE_SERVER_IP_WITH_PROXY_WALLETS:false, // This option should be set to TRUE for only one bot — it must be FALSE for the others
        USE_MAIN_WALLET:false // This option should be set to TRUE for only one bot — it must be FALSE for the others
      }
    },
    {
      name: "arb5", // Note the 5th bot
      script: "bash",
      args: "./start_arb.sh",
      exec_mode: "fork",
      max_memory_restart: '300M',
      restart_delay: 20000,
      cron_restart: '0 * * * *', // Restart time
      env: {
        APP_UNIQUE_ID: "arb5",
        BIND_IP_FILE: "./bind-ips-1.txt", // Based on the current market conditions, 25 IPs is ideal — anything over 35 is overkill
        TASKSET_RANGE: "12-15", // Note for the ryzen 7950x 16c-32t
        JUPITER_URL: 'http://127.0.0.1:5051', // Note the 5051 port for jup2
        JUPITER_SWAP_URL: "http://127.0.0.1:5051", // Note the 5051 port for jup2
        USE_SERVER_IP_WITH_PROXY_WALLETS:false, // This option should be set to TRUE for only one bot — it must be FALSE for the others
        USE_MAIN_WALLET:false // This option should be set to TRUE for only one bot — it must be FALSE for the others
      }
    },
    {
      name: "jup1", // Note the 1st jup bot
      script: "bash",
      args: "./jup/start_jup.sh",
      cron_restart: '0 * * * *', // Restart time
      env: {
        WEBSERVER_THREAD_COUNT: 80,
        UPDATE_THREAD_COUNT: 50,
        TOTAL_THREAD_COUNT: 150,
        RPC_URL: "YOUR_RPC_URL", // Your RPC URL
        YELLOWSTONE_GRPC_ENDPOINT: "YOUR_GRPC_URL", // Your GRPC URL
        YELLOWSTONE_GRPC_X_TOKEN: "xToken", // Your X TOKEN
        TASKSET_RANGE: "15-23", // Note for the ryzen 7950x 16c-32t
        PORT: "5050", // Note the different port for jup1
      }
    },
    {
      name: "jup2", // Note the 2nd jup
      script: "bash",
      args: "./jup/start_jup.sh",
      cron_restart: '0 * * * *', // Restart time
      env: {
        WEBSERVER_THREAD_COUNT: 80,
        UPDATE_THREAD_COUNT: 50,
        TOTAL_THREAD_COUNT: 150,
        RPC_URL: "https://fra.rpc.sharklabs.sh", // Your RPC URL
        YELLOWSTONE_GRPC_ENDPOINT: "https://fra.grpc.sharklabs.sh", // Your RPC URL
        TASKSET_RANGE: "23-31", // Note for the ryzen 7950x 16c-32t
        PORT: "5051", // Note the different port for jup2
      }
    }
  ]
};




