module.exports = {
  apps: [
    {
      name: "arb1",
      script: "bash",
      args: "./start_arb.sh",
      exec_mode: "fork",
      max_memory_restart: '300M',
      restart_delay: 20000,
      cron_restart: '0 * * * *',
      
    },
    {
      name: "jup1",
      script: "bash",
      args: "./jup/start_jup.sh",
      cron_restart: '0 * * * *',
      env: {
        WEBSERVER_THREAD_COUNT: 80,
        UPDATE_THREAD_COUNT: 45,
        TOTAL_THREAD_COUNT: 150,
        PORT: 5053
      }
    }
  ]
};




