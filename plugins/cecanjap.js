let handler = async (m, { conn }) => {
    conn.sendButtonImg(m.chat, ('https://api.zacros.my.id/asupan/japan'), '2023 © Dann-MD', wm, 'NEXT', '.cevanjapan', m)
}

handler.help = ['cecanjapan']
handler.tags = ['asupan']
handler.command = /^(cecanjapan)$/i
handler.limit = 3

module.exports = handler