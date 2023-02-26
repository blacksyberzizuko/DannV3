let handler = async (m, { conn }) => {
let caption = `*Waalaikummussalam warahmatullahi wabarokatuh*


"Orang yang mengucapkan salam seperti ini maka ia mendapatkan 30 pahala, kemudian, orang yang dihadapan atau mendengarnya membalas dengan kalimat yang sama yaitu “Wa'alaikum salam warahmatullahi wabarakatuh” atau ditambah dengan yang lain (waridhwaana). Artinya selain daripada do'a selamat juga meminta pada Allah SWT"
`

conn.sendButton( m.chat, caption, `Salam`, [['Waalaikummussalam','warahmatullahi wabarokatuh']], m)

       }
       
handler.customPrefix = /^(assalamualaikum|Salom|salam)/i
handler.command = new RegExp
module.exports = handler