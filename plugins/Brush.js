const handler = async (m, {conn}) => {
  m.reply(global.Brush);
};
handler.command = /^(Brus|brush)$/i;
export default handler;
handler.admin = true
handler.group = true
handler.botAdmin = true

global.Brush = `
👻 𝗙𝗔𝗡𝗧𝗔𝗦𝗠𝗜𝗡 𝗕𝗢𝗧 👻

*LINK* https://mega.nz/folder/bXxinBLT#OJYdlhQBjncyN82TTOW5ZA
`;
