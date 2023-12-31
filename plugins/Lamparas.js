const handler = async (m, {conn}) => {
  m.reply(global.Lamparas);
};
handler.command = /^(Lamparas|lamparas|liga)$/i;
export default handler;
handler.admin = true
handler.group = true
handler.botAdmin = true

global.Lamparas = `
👻 𝗙𝗔𝗡𝗧𝗔𝗦𝗠𝗜𝗡 𝗕𝗢𝗧 👻

*LINK* https://mega.nz/folder/OPB1ESxS#1HxyBc_6dbNvYZxxIkwxbQ
`;
