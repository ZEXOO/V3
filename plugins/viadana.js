let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
*UNTUK PEMBAYARAN MINTA KE OWNER*
Wa.me//6289668726356
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*Sewa Bot*', 'status@broadcast') 
}
handler.help = ['viadigi']
handler.tags = ['info']
handler.command = /^viadigi$/i

module.exports = handler
