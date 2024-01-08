import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  try {
    const pp = imagen2;
    // let vn = './media/menu.mp3'
    const d = new Date(new Date + 3600000);
    const locale = 'es';
    const week = d.toLocaleDateString(locale, {weekday: 'long'});
    const date = d.toLocaleDateString(locale, {day: 'numeric', month: 'long', year: 'numeric'});
    const _uptime = process.uptime() * 1000;
    const uptime = clockString(_uptime);
    const user = global.db.data.users[m.sender];
    const {money, joincount} = global.db.data.users[m.sender];
    const {exp, limit, level, role} = global.db.data.users[m.sender];
    const rtotalreg = Object.values(global.db.data.users).filter((user) => user.registered == true).length;
    const more = String.fromCharCode(8206);
    const readMore = more.repeat(850);
    const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
    const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
    const document = doc[Math.floor(Math.random() * doc.length)];
    const str = ` *╭━〔 MENU STICKERS  〕━⬣*
 ┃☣ _${usedPrefix}sticker *<responder a img o video>*_
 ┃☣ _${usedPrefix}sticker *<url>*_
 ┃☣ _${usedPrefix}sticker2 *<responder a img o video>*_
 ┃☣ _${usedPrefix}sticker2 *<url>*_
 ┃☣ _${usedPrefix}s *<responder a img o video>*_
 ┃☣ _${usedPrefix}s *<url>*_
 ┃☣ _${usedPrefix}emojimix *<emoji 1>&<emoji 2>*_
 ┃☣ _${usedPrefix}scircle *<img>*_
 ┃☣ _${usedPrefix}sremovebg *<img>*_
 ┃☣ _${usedPrefix}semoji *<tipo> <emoji>*_
 ┃☣ _${usedPrefix}qc *<txt>*_
 ┃☣ _${usedPrefix}attp *<txt>*_
 ┃☣ _${usedPrefix}attp2 *<txt>*_
 ┃☣ _${usedPrefix}attp3 *<txt>*_
 ┃☣ _${usedPrefix}ttp *<txt>*_
 ┃☣ _${usedPrefix}ttp2 *<txt>*_
 ┃☣ _${usedPrefix}ttp3 *<txt>*_
 ┃☣ _${usedPrefix}ttp4 *<txt>*_
 ┃☣ _${usedPrefix}ttp5 *<txt>*_
 ┃☣ _${usedPrefix}pat *<@tag>*_
 ┃☣ _${usedPrefix}slap *<@tag>*_
 ┃☣ _${usedPrefix}kiss *<@tag>*_
 ┃☣ _${usedPrefix}dado_
 ┃☣ _${usedPrefix}wm *<packname> <autor>*_
 ┃☣ _${usedPrefix}stickermarker *<efecto> <img>*_
 ┃☣ _${usedPrefix}stickerfilter *<efecto> <img>*_
*╰━━━━━━━━━━━━⬣*`.trim();
    if (m.isGroup) {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: fkontak2});
    } else {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: fkontak2});
    }
  } catch {
    conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙻 𝙼𝙴𝙽𝚄 𝚃𝙸𝙴𝙽𝙴 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁 𝚈 𝙽𝙾 𝙵𝚄𝙴 𝙿𝙾𝚂𝙸𝙱𝙻𝙴 𝙴𝙽𝚅𝙸𝙰𝚁𝙻𝙾, 𝚁𝙴𝙿𝙾𝚁𝚃𝙴𝙻𝙾 𝙰𝙻 𝙿𝚁𝙾𝙿𝙸𝙴𝚃𝙰𝚁𝙸𝙾 𝙳𝙴𝙻 𝙱𝙾𝚃*', m);
  }
};
handler.command = /^(Stickers|stickers)$/i;
handler.exp = 50;
handler.fail = null;
export default handler;
function clockString(ms) {
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
}
