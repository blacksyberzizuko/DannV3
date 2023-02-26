let handler = async m => m.reply(`
┏━━━ꕥ〔 *${global.wm2}*〕ꕥ━⬣ 
┃- Base ⤵️
┃- https://github.com/Aiinne/Aine-MD
┃- Recode ⤵️
┃- https://drive.google.com/file/d/14bw9wXlOqyMVJIiyzhOxL4xcNCK52Vlv/view?usp=drivesdk
┃- Note: Minimal kasih credit kalo mau take Script.
┗━━━ꕥ
`.trim()) // Tambah sendiri
handler.help = ['script']
handler.tags = ['info']
handler.command = /^(sc|script)$/i

module.exports = handler