const handler = async (m, {isOwner, isAdmin, conn, text, participants, args, command, usedPrefix}) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  if (!(isAdmin || isOwner)) {
    global.dfail('admin', m, conn);
    throw false;
  }
  const pesan = args.join` `;
  const oi = `@𝗢𝗽𝘁𝗶𝗺𝘂𝘀.𝗩𝗲𝗻𝘁𝗮𝘀.𝗕𝗼𝘁 ${pesan}`;
  let teks = `𝗢𝗽𝘁𝗶𝗺𝘂𝘀 𝗔𝘃𝗶𝘀𝗮 𝗤𝘂𝗲 𝗛𝗮𝘆 𝗦𝗼𝗿𝘁𝗲𝗼𝘀 𝗣𝗹𝗮𝗻𝘁𝗶𝘁𝗮 🌱\n\n${oi}\n\n`;
  for (const mem of participants) {
    teks += `ִ໋ღ ➤ @${mem.id.split('@')[0]}\n`;
  }
  teks += `\n 〔 𝗢𝗽𝘁𝗶𝗺𝘂𝘀 𝗕𝗼𝘁 〕`;
  conn.sendMessage(m.chat, {text: teks, mentions: participants.map((a) => a.id)} );
};
handler.help = ['tagall <mesaje>', 'invocar <mesaje>'];
handler.tags = ['group'];
handler.command = /^(sorteos|Sorteos)$/i;
handler.admin = true;
handler.group = true;
export default handler;
