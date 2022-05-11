let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
	conn.send2ButtonLoc(m.chat, await (await fetch(fla + 'sewa bot')).buffer(), `╠═〘 Beli Bot 〙 ═
┏━━⬡ *LIST SEWABOT*
┃⬡ PERHARI : 3K
┃⬡ PERMINGGU : 5K
┃⬡ Permanen : 10K
┗━━⬡
┏━━⬡ *JADI USER PREMIUM*
┃⬡ 1MINGGU : 2K
┃⬡ 2MINGGU : 4K
┃⬡ Permanen : 5K
┗━━⬡
┏━━⬡ *VIP*
┃⬡ JASA RUN HEROKU :20K
┃⬡ JADI BOT PERMANEN :25K
┗━━⬣`.trim(), '❖ ZEXXO BOTZ', 'Gopay', '#viadigi', 'Dana', '#viaumobile', m)
}

handler.command = /^sewabot$/i

module.exports = handler
