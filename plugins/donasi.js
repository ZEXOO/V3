let fetch = require('node-fetch')
let handler = async (m, { conn }) => conn.sendButtonLoc(m.chat, await (await fetch(bank)).buffer(), `
*───────「 DONATE 」 ─────*
╭═══════════════
║╭─── [ DONASI ] ───
║│➸ _*Dana*_✅ : 
║│- KEPO YA?
║│
║│➸ _*Pulsa INDOSAT*_✅: 
║│- 085882949350
║│
║│➸ _*OWNER*_
║│- Wa.me//6289668726356
║╰────────────
╰═══════════════
`.trim(), '©ZEXXO-BOTZ', 'Owner Bot', '.owner')
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
