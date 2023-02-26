let { sticker } = require('../lib/sticker.js')

let handler = async (m, { conn, text, usedPrefix, command }) => {

let stiker = await sticker(null, global.API(`${pickRandom(stikerhuuu)}`), global.packname, global.author)
    if (stiker) return conn.sendFile(m.chat, stiker, 'sticker.webp', '', m)
    throw stiker.toString()
    
}

handler.customPrefix = /(sip|mmk|memek|kontol|pepek|yatim|piatu|pussy|puki|komtol|ngentod|ngewe|coli|colai|bacot|bangsat)/i
handler.command = new RegExp

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
let stikerhuuu = [
 "https://telegra.ph/file/aeba7cac2723c7f649885.jpg",// Jangan Toxic
]