const handler = async (m, {conn}) => {
  m.reply(global.Degradados);
};
handler.command = /^(Degradados|degradados)$/i;
export default handler;
handler.admin = true
handler.group = true
handler.botAdmin = true

global.Degradados = `
👻 𝗙𝗔𝗡𝗧𝗔𝗦𝗠𝗜𝗡 𝗕𝗢𝗧 👻

*LINK* https://mega.nz/folder/LaI0HBJa#7_EDAma5WSTqMjEFDPvWyw
`;
