const handler = async (m, {conn}) => {
  m.reply(global.Presentacion);
};
handler.command = /^(Presentacion|presentacion|liga)$/i;
export default handler;
handler.admin = true
handler.group = true
handler.botAdmin = true

global.Presentacion = `
👻 𝗙𝗔𝗡𝗧𝗔𝗦𝗠𝗜𝗡 𝗕𝗢𝗧 👻

*LINK* https://mega.nz/folder/yPZlGQAT#mMb9RVE5XsVfDFqiWaeyIw
`;
