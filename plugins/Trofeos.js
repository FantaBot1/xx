const handler = async (m, {conn}) => {
  m.reply(global.Trofeos);
};
handler.command = /^(Trofeos|trofeos|liga)$/i;
export default handler;
handler.admin = true
handler.group = true
handler.botAdmin = true

global.Trofeos = `
👻 𝗙𝗔𝗡𝗧𝗔𝗦𝗠𝗜𝗡 𝗕𝗢𝗧 👻

*LINK* https://mega.nz/folder/PHRGEJRD#5IBYfEmSOs97cdUEh-AzEA
`;
