const handler = async (m, {conn}) => {
  m.reply(global.Cadenas);
};
handler.command = /^(Cadenas|cadenas|liga)$/i;
export default handler;
handler.admin = true
handler.group = true
handler.botAdmin = true

global.Cadenas = `
👻 𝗙𝗔𝗡𝗧𝗔𝗦𝗠𝗜𝗡 𝗕𝗢𝗧 👻

*LINK* https://mega.nz/folder/XWhWVaoZ#coavE6O2Myw7OxWxFoClUg
`;
