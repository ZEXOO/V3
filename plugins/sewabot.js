let fetch = require('node-fetch')
let { MessageType } = require('@adiwajshing/baileys')
let handler = async(m, { conn }) => {
    let ZEXXO BOTZ = `
╭═══ 〔 SEWA BOT 〕 ════
├⬡ 1 HARI
├⬡ 1 MINGGU
├⬡ PERMANEN
├⬡ 2GRUP PERMANEN
└═══════════════
𝗦𝗶𝗹𝗮𝗸𝗮𝗻 𝗸𝗹𝗶𝗸 𝗽𝗮𝗱𝗮 "𝗟𝗶𝘀𝘁 𝗛𝗮𝗿𝗴𝗮" 𝘂𝗻𝘁𝘂𝗸 𝗺𝗲𝗹𝗶𝗵𝗮𝘁 𝗹𝗶𝘀𝘁.
╭═══════════════════════
║╭──❉ 〔 SEWA CHAT OWNER 〕 ❉──────
║│➸ *Owner*: Wa.me//6289668726356
║╰─────────────────────
╰═══════════════════════`.trim()
    const button = {
        buttonText: 'List Harga',
        description: ZEXXO BOTZ,
        sections:  [{title: "Silahkan di pilih", rows: [
        {title: '1 HARI', description: "Rp3.00\nSewa bot 1 Minggu.", rowId:".masuk"},
        {title: '1 Minggu', description: "Rp5.000\nSewa bot 2 Minggu.", rowId:".masuk"},
        {title: 'PERMANEN', description: "Rp10.000\nSewa bot PERMANEN.", rowId:".masuk"},
        {title: '2GRUP PERMANEN', description: "Rp15.000\nSewa bot 2GRUP PERMANEN.", rowId:".masuk"},
        {title: 'Owner', description: "Chat owner nya jika ada perlu.", rowId:".owner"},
       ] }],
        listType: 1
       }
    conn.sendMessage(m.chat, button, MessageType.listMessage, { quoted: m })
}
handler.tags = ['main']
handler.command = /^(sewa)$/i
handler.help = ['sewa']
module.exports = handler
//R-Txzy
