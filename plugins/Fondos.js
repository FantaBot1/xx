const handler = async (m, {conn}) => {
  m.reply(global.Fondos);
};
handler.command = /^(Fondos|fondos|liga)$/i;
export default handler;
handler.admin = true
handler.group = true
handler.botAdmin = true

global.Fondos = `
👻 𝗙𝗔𝗡𝗧𝗔𝗦𝗠𝗜𝗡 𝗕𝗢𝗧 👻

*LINK* https://mega.nz/folder/DOgQFbhC#zQPYN3J9776vxuclCkNAwg
`;
