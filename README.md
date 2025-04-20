# 🤖 CC-Bot Arbitrage System

Welcome to the official CC-Bot arbitrage system! This guide will help you set up, configure, and launch your bot in just a few steps.

---

## 📄 Documentation  
For full setup and usage instructions, please refer to our official documentation:  
👉 [https://cc-bot.gitbook.io/cc-bot-1](https://cc-bot.gitbook.io/cc-bot-1)

---

## 💬 Community Support  
Need help or want to ask questions?  
Join our Discord for detailed support and updates:  
👉 [https://discord.gg/uyNtGXbFQD](https://discord.gg/uyNtGXbFQD)

---

## 🧪 Demo Accounts  
These accounts use shared settings. You can view their activity here:

- 🔗 [Demo 1](https://www.circular.bot/address/GJLAHPJ2j6nLTuc6ncP2RrkrjBsfxWmPRbygwouoe9aX)  
- 🔗 [Demo 2](https://www.circular.bot/address/GHMtWb5gVMViQiXJtYPcPiwqC9MULu4SZaQFLToL64yJ)

---

## ⚙️ Quick Setup Guide

### 1. Add Your Keypair  
Place your wallet keypair in the root of the project as:
```
auth.json
```

---

### 2. Configure Proxies  
Each line should follow this format:
```
xxx.xxx.xxx.xx:PORT:username:password
```

---

### 3. Add Subnet IPs  
Each IP should be on a new line:
```
123.234.12.1
123.234.12.2
123.234.12.3
...
```

**Note:** Make sure to include your main server IP as well.

---

### 4. Update RPC URLs  
- In `jup/start_jup.sh`: update the **Jupiter RPC URL**  
- In `start_arb.sh`: update both **RPC** and **Jupiter RPC** URLs accordingly

---

### 5. Download the Bot Release  
Download the latest release and place it in the `cc-arb-executable` folder.

Make it executable:
```bash
chmod +x cc-arbitrage-bot
```

---

### 6. Download Jupiter Swap API  
Place the release in the `jup` folder.

Download link:  
🔗 https://github.com/jup-ag/jupiter-swap-api/releases

Make it executable:
```bash
chmod +x jupiter-swap-api
```

---

### 7. Start the Bot  
Start the bot using PM2:
```bash
pm2 start ecosystem.config.js
```

> 💡 **Recommended:** Run 2 Jup and 4 bot instances per server (or more, depending on your system specs).  
Adjust the `ecosystem.config.js` file accordingly to scale.

---

✅ That's it! You're ready to go. Happy arbitraging!
