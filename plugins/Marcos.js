const handler = async (m, {conn}) => {
  m.reply(global.Marcos);
};
handler.command = /^(Marcos|marcos|liga)$/i;
export default handler;
handler.admin = true
handler.group = true
handler.botAdmin = true

global.Marcos = `
👻 𝗙𝗔𝗡𝗧𝗔𝗦𝗠𝗜𝗡 𝗕𝗢𝗧 👻

*LINK* https://mega.nz/folder/TaxS1Y5Z#8RvWc7v5yA0j7CO850kyww
`;
