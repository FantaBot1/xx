const handler = async (m, {conn}) => {
  m.reply(global.Empresas);
};
handler.command = /^(Empresas|empresas)$/i;
export default handler;
handler.admin = true
handler.group = true
handler.botAdmin = true

global.Empresas = `
👻 𝗙𝗔𝗡𝗧𝗔𝗦𝗠𝗜𝗡 𝗕𝗢𝗧 👻

*LINK* https://mega.nz/folder/OeR3iKjZ#pgi4Ka5I5b6bMrgAGwVsNw
`;
