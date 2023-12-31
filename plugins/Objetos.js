const handler = async (m, {conn}) => {
  m.reply(global.Objetos);
};
handler.command = /^(Objetos|objetos|liga)$/i;
export default handler;
handler.admin = true
handler.group = true
handler.botAdmin = true

global.Objetos = `
👻 𝗙𝗔𝗡𝗧𝗔𝗦𝗠𝗜𝗡 𝗕𝗢𝗧 👻

*LINK* https://mega.nz/folder/7CZyADoY#Z9Iiv53HH_VYM5ne1iYZbA
`;
