let fs = require('fs')
let handler = async (m, { conn }) => {
conn.reply(m.chat, 'https://instagram.com/dannalwaysalone', m) 
}
handler.help = ['igowner']
handler.tags = ['info']
handler.command = /^(igowner)$/i

module.exports = handler