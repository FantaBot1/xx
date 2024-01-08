const handler = async (m, {isOwner, isAdmin, conn, text, participants, args, command, usedPrefix}) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  if (!(isAdmin || isOwner)) {
    global.dfail('admin', m, conn);
    throw false;
  }
  const pesan = args.join` `;
  const oi = `@𝐎𝐩𝐭𝐢𝐦𝐮𝐬.𝐕𝐞𝐧𝐭𝐚𝐬.𝐁𝐨𝐭${pesan}`;
  let teks = `𝐎𝐩𝐭𝐢𝐦𝐮𝐬 𝐀𝐯𝐢𝐬𝐚 𝐐𝐮𝐞 𝐇𝐚𝐲 𝐕𝐞𝐫𝐬𝐮𝐬 𝐏𝐥𝐚𝐧𝐭𝐢𝐭𝐚 🌱 \n\n${oi}\n\n`;
  for (const mem of participants) {
    teks += `ִ໋ღ ➤ @${mem.id.split('@')[0]}\n`;
  }
  teks += `\n 〔 𝗢𝗽𝘁𝗶𝗺𝘂𝘀 𝗕𝗼𝘁 〕`;
  conn.sendMessage(m.chat, {text: teks, mentions: participants.map((a) => a.id)} );
};
handler.help = ['tagall <mesaje>', 'invocar <mesaje>'];
handler.tags = ['group'];
handler.command = /^(versus|Vs|vs|Versus)$/i;
handler.admin = true;
handler.group = true;
export default handler;
