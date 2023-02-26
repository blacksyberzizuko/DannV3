let cp = require('child_process')
let { promisify } = require('util')
let exec = promisify(cp.exec).bind(cp)
let handler = async (m) => {
    let o
    try {
        o = await exec('node test.js')
    } catch (e) {
        o = e
    } finally {
        let { stdout, stderr } = o
        if (stdout.trim()) m.reply(stdout)
        if (stderr.trim()) m.reply(stderr)
    }
}
handler.help = ['tes']
handler.tags = ['info']
handler.command = /^(tes)$/i

module.exports = handler
