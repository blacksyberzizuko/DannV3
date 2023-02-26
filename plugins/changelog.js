let handler = async m => m.reply(`
┏━━━ꕥ〔 *${global.wm2}*〕ꕥ━⬣ 
┃- Memperbaiki Menu
┃- Memperbaiki YouTube Play ( Server )
┃- Memperbaiki Mediafire Downloader
┃- Memperbaiki Facebook Downloader
┃- Memperbaiki Instagram Downloader
┃- Memperbaiki Tampilan
┃- Memperbaiki Bilangan Desimal
┃- Memperbaiki Ssweb
┃- Memperbaiki Github Downloader
┃- Memperbaiki Rpg ( Sebelumnya )
┗━━━ꕥ
┏━━━ꕥ〔 *Update* 〕ꕥ━⬣ 
┃- Menambahkan Barang di Shop
┃- Menambahkan Stock Barang di Shop
┃- Menambahkan Material
┃- Menambahkan Fitur Anime
┃- Menambahkan Rpg
┃- Menambahkan Spotify
┃- Menambahkan Shopee
┃- Menambahkan Menfess
┃- Menambahkan Confess
┃- Menambahkan Bansos
┃- Menambahkan Berdagang
┃- Menambahkan Misi Rpg ( Polisi, Taxy, Dll )
┗━━━ꕥ
┏━━━ꕥ〔 *Informasi* 〕ꕥ━⬣ 
┃- Version 1.0.2 ( Beta )
┃- Base Esm to Cjs
┃- Auto Restarting Database
┃- Auto Backup Database
┃- Auto UP Limit & Exp
┃- Up to Beta Baileys ( v1.0.2 )
┗━━━ꕥ
`.trim()) // Tambah sendiri
handler.help = ['changelog']
handler.tags = ['info']
handler.command = /^change(log|info)$/i

module.exports = handler