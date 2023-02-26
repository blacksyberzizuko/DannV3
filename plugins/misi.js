let handler = async (m, {conn, command, args, usedPrefix}) => {
let teks = 'Misi Rpg'
const sections = [
   {
	title: `✃ MISI`,
	rows: [
	    {title: "Taxy", rowId: '.grab', description: 'Rpg Taxy' },
	    {title: "Membunuh", rowId: '.bunuh', description: 'Rpg Membunuh' },
	{title: "Ojek", rowId: '.ojek', description: 'Rpg Ojek' },
	{title: "Nganu", rowId: '.anu', description: 'Rpg Open anu' },
	{title: "Koboy", rowId: '.koboy', description: 'Rpg Koboy' },
	{title: "Polisi", rowId: '.polisi', description: 'Rpg Polisi' },
	]
    }, 
]
const listMessage = {
  text: `Silahkan Pilih Misi Rpg Dibawah...`,
  footer: global.wm,
  title: `⎔───「 ${teks} 」───⎔`,
  buttonText: `Click Here`,
  sections
}

await conn.sendMessage(m.chat, listMessage, { quoted: m})
//conn.sendHydrated(m.chat, info, wm, null, sgc, "🌎 Group Official", null,null, [['Owner','.owner']], m)
}

handler.help = ['misi', 'misirpg']
handler.tags = ['info']
handler.command = /^(misi(rpg)?|misirpg)$/i
handler.private = false

module.exports = handler
