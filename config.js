let fs = require('fs') 
let chalk = require('chalk')
let moment = require('moment-timezone')

// Waktu
let wibh = moment.tz('Asia/Jakarta').format('HH')
    let wibm = moment.tz('Asia/Jakarta').format('mm')
    let wibs = moment.tz('Asia/Jakarta').format('ss')
    let wktuwib = `${wibh}:${wibm}:${wibs}`
// Owner
global.owner = [
  ['6283137550315'],
  ['6283137550315'],
  ['6283137550315', 'DannLonely', 'danigtps@gmail.com', true]
] // Put your number here
global.mods = [] // Want some help?
global.prems = ['12405182763'] // Premium user has unlimited limit
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  bcil: 'https://75.119.137.248:21587',
  neoxr: 'https://api.neoxr.eu.org/',
  gimez: 'https://masgimenz.my.id/',
  melcanz: 'https://melcanz.com',
  pencarikode: 'https://pencarikode.xyz',
  LeysCoder: 'https://leyscoders-api.herokuapp.com',
  restapi: 'https://x-restapi.herokuapp.com',
  alphabot: 'https://api-alphabot.herokuapp.com'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': '524e9d1f64f72f79',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.neoxr.eu.org/': '0fWgL9ID',
  'https://pencarikode.xyz': 'pais',
  'https://melcanz.com': 'ZZBk7EBb',
  'https://leyscoders-api.herokuapp.com': 'dappakntlll',
  'https://x-restapi.herokuapp.com': 'BETA',
  'https://api-alphabot.herokuapp.com': 'N7axnIq3'
}

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0

const spack = fs.readFileSync("lib/exif.json")
const stickerpack = JSON.parse(spack)
if (stickerpack.spackname == '') {
  var sticker_name = 'Dann-MD'
  var sticker_author = 'Dann Official'
} else {
  var sticker_name = stickerpack.spackname
  var sticker_author = stickerpack.sauthor
}

const file_exif = "lib/exif.json"
fs.watchFile(file_exif, () => {
  fs.unwatchFile(file_exif)
  console.log(chalk.redBright("Update 'exif.json'"))
  delete require.cache[file_exif]
  require('./lib/exif.json')
})

// Database
global.version = '2, 2208, 14'
global.sessionName = 'Dann'
global.gcbot = 'https://chat.whatsapp.com/KsflYNKrlNP1BnLMKHyulz'
global.instagram = 'https://instagram.com/dannalwaysalone'
global.namebot = 'Dann-MD Rpg PlayGround'

// Sosial Media
global.sig = 'https://instagram.com/dannalwaysalone'
global.syt = 'https://youtube.com/@dannofficial'
global.sgh = 'https://github.com/DannOfficial'
global.sgc = 'https://chat.whatsapp.com/FR1KfE3OTcQCayiabos8Ff'
global.swa = 'https://wa.me/+6283137550315'
global.swb = 'https://discord.gg/titanium'
global.snh = 'https://nhentai.net/g/365296/' //Make ini aja gausah di ganti.

// Fake Size
global.fsizedoc = '99999999999999' // default 10TB
global.fpagedoc = '999'

global.useMulti = true

// Sticker WM
global.packname = sticker_name
global.author = sticker_author
global.wm = '2023 © Dann-MD'
global.wm2 = 'Dann-MD Rpg PlayGround'
global.bottime = `Time: ${wktuwib}`
global.titlebot = `${global.wm}`
global.author = 'DannXD' 
global.packname = 'Dann-MD\n\nOwner: +62 831-3755-0315'
global.danied = '✘ 𝗘𝗥𝗥𝗢𝗥 𝟰𝟬𝟰'
global.ultahowner = 'Desember 12 2023'
global.nomorown = '6283137550315'
global.nameown = 'DannXD'

// Tampilan,
global.htki =  '⃝▣──「' //hiasan title kiri
global.htka = '」───⬣' //hiasan title kanan
global.htjava = '❃' //hiasan Doang :v
global.sa = '╭─'
global.gx = '│✇'
global.gy = '│•'
global.gz = '│'
global.sb = '╰────࿐'
global.kki = '「'
global.kka = '」'
global.zt = '*'
global.zc = ''

global.multiplier = 1000 // The higher, The harder levelup

global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      exp: '✉️',
      money: '💵',
      potion: '🥤',
      diamond: '💎',
      common: '📦',
      uncommon: '🎁',
      mythic: '🗳️',
      legendary: '🗃️',
      pet: '🎁',
      trash: '🗑',
      armor: '🥼',
      sword: '⚔️',
      wood: '🪵',
      rock: '🪨',
      string: '🕸️',
      horse: '🐎',
      cat: '🐈' ,
      dog: '🐕',
      fox: '🦊',
      petFood: '🍖',
      iron: '⛓️',
      gold: '👑',
      emerald: '💚'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
