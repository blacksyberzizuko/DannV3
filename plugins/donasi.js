let handler = async m => m.reply(`
┏━━━ꕥ〔 *${global.wm2}*〕ꕥ━⬣ 
┃Dana: 083137550315
┃Pulsa: 083137550315 ( XL )
┃Pulsa: 0895342959060 ( 3 )
┃Gopay: 083137550315
┗━━━ꕥ
┏━━━ꕥ〔 *Website* 〕ꕥ━⬣ 
┃Saweria: https://saweria.co/DannXD
┃Trakteer: https://trakteer.id/DannXD
┃Socialbuzz: https://socialbuzz.com/DannXD
┃Thanks for Donationing!
┗━━━ꕥ
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler