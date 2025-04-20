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

## ⚙️ Quick Setup

1. **Add your keypair file**  
   Place your keypair JSON in:  
   ```
   auth.json
   ```

2. **Add your proxies**  
   Format should be:
   ```
   xxx.xxx.xxx.xx:PORT:username:password
   ```

2. **Add your subnet IPs**  
   Format should be:
   ```
   per line 1 IP (use your main IP=server main IP)
   123.234.12.1
   123.234.12.2
   123.234.12.3
   .
   .
   .
   ```

3. **Edit RPC URLs**  
   - In `start_jup.sh`, update the **Jupiter RPC URL**  
   - In `start_arb.sh`, update both the **RPC** and **Jupiter** URLs

4. **Download the bot release in cc-arb-executable folder**  
   - Run chmod +x cc-arbitrage-bot  using terminal

5. **Download the jupiter-swap-api release in cc-arb-executable folder**  
   - Run chmod +x jupiter-swap-api  using terminal
  
6. **Start the bot**  
   Run the bot using PM2:
   ```
   pm2 start ecosystem.config.js
   ```

**We recommend running 2 Jup and 4 bots on each server — depending on your server’s specs, you can run as many bots and Jupiters as you want. It’s enough to adjust the ecosystem.config.js file accordingly.**


---

✅ That's it! You're ready to go.
