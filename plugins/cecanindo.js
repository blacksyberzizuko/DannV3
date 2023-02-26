let handler = async (m, { conn }) => {
    conn.sendButtonImg(m.chat, ('https://api.zacros.my.id/asupan/indonesia'), '2023 © Dann-MD', wm, 'Next', '.cecanindo', m)
}

handler.help = ['cecanindo']
handler.tags = ['asupan']
handler.command = /^(cecanindo)$/i
handler.limit = 3
module.exports = handler

