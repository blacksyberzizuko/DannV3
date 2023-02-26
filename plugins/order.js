let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw `Jika ingin *Order*, Silahkan pakai perintah ini\n\ncontoh:\n${usedPrefix + command} Diamond Free Fire`
    if (text.length < 1 ) throw `Orderan terlalu pendek, minimal 10 karakter!`
    if (text.length > 1000) throw `Orderan terlalu panjang, maksimal 1000 karakter!`
    let teks = `*${htki} ${command.toUpperCase()} ${htka}*\nPesanan: ${text}\n*Dari: @${m.sender.split`@`[0]}*`
    conn.reply(global.nomorown + '@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, null, {
        contextInfo: {
            mentionedJid: [m.sender]
        }
    })
    m.reply('Pesan telah terkirim ke owner!')
}
handler.command = /^(order)$/i
module.exports = handler