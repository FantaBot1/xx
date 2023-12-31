const handler = async (m, {conn}) => {
  m.reply(global.Podio);
};
handler.command = /^(Podio|podio|liga)$/i;
export default handler;
handler.admin = true
handler.group = true
handler.botAdmin = true

global.Podio = `
👻 𝗙𝗔𝗡𝗧𝗔𝗦𝗠𝗜𝗡 𝗕𝗢𝗧 👻

*LINK* https://mega.nz/folder/DPh20SgZ#2B2NpQg0fTpD4I3pm5XQ0g
`;
