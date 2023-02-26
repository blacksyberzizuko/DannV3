let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
let response = args.join(' ').split('|')
  if (!args[0]) throw 'Masukkan teks!?\nContoh :\!pornhub tes|tes'
  m.reply('Proses...')
  let res = `https://api.lolhuman.xyz/api/textprome2/pornhub?apikey=64333e1c050ced435defe154&text1=${response[0]}&text2=${response[1]}`
  conn.sendFile(m.chat, res, 'pornhub.jpg', `*Nihh kak\n2023 © Dann-MD`, m, false)
}
handler.help = ['pornhub'].map(v => v + ' <text>|<text>')
handler.tags = ['maker']
handler.command = /^(pornhub)$/i
handler.register = true

handler.limit = true
handler.premium = true

module.exports = handler
