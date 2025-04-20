module.exports = {
  apps: [
    {
      name: "arb3",
      script: "bash",
      args: "./start_arb.sh",
      exec_mode: "fork",
      max_memory_restart: '300M',
      restart_delay: 20000,
      cron_restart: '0 * * * *',
      
    },
  ]
};




