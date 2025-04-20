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

3. **Edit RPC URLs**  
   - In `start_jup.sh`, update the **Jupiter RPC URL**  
   - In `start_arb.sh`, update both the **RPC** and **Jupiter** URLs

4. **Start the bot**  
   Run the bot using PM2:
   ```
   pm2 start ecosystem.config.js
   ```

---

✅ That's it! You're ready to go.
