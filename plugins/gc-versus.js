const handler = async (m, {isOwner, isAdmin, conn, text, participants, args, command, usedPrefix}) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  if (!(isAdmin || isOwner)) {
    global.dfail('admin', m, conn);
    throw false;
  }
  const pesan = args.join` `;
  const oi = `👻 𝗙𝗮𝗻𝘁𝗮𝘀𝗺𝗶𝗻 𝗕𝗼𝘁 / @𝗙𝗮𝗻𝘁𝗮𝘀𝗺𝗶𝗻.𝗩𝗲𝗻𝘁𝗮𝘀.𝗕𝗼𝘁 👻 ${pesan}`;
  let teks = `𝗙𝗮𝗻𝘁𝗮𝘀𝗺𝗶𝗻 𝗗𝗶𝗰𝗲 𝗤𝘂𝗲 𝗛𝗮𝘆 𝗩𝘀 👻\n\n${oi}\n\n`;
  for (const mem of participants) {
    teks += `ִ໋👻 ➢ @${mem.id.split('@')[0]}\n`;
  }
  teks += `\n 👻 𝗙𝗔𝗡𝗧𝗔𝗦𝗠𝗜𝗡 𝗕𝗢𝗧 👻`;
  conn.sendMessage(m.chat, {text: teks, mentions: participants.map((a) => a.id)} );
};
handler.help = ['tagall <mesaje>', 'invocar <mesaje>'];
handler.tags = ['group'];
handler.command = /^(versus|Vs|vs|Versus)$/i;
handler.admin = true;
handler.group = true;
export default handler;
