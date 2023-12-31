const handler = async (m, {conn}) => {
  m.reply(global.Camisetas);
};
handler.command = /^(Camisetas|camisetas|liga)$/i;
export default handler;
handler.admin = true
handler.group = true
handler.botAdmin = true

global.Camisetas = `
👻 𝗙𝗔𝗡𝗧𝗔𝗦𝗠𝗜𝗡 𝗕𝗢𝗧 👻

*LINK* https://mega.nz/folder/aWQWzDwQ#Hdli0Dkn0IqjynRuii7Sgw
`;
