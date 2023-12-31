const handler = async (m, {conn}) => {
  m.reply(global.Balas);
};
handler.command = /^(Balas|balas|liga)$/i;
export default handler;
handler.admin = true
handler.group = true
handler.botAdmin = true

global.Balas = `
👻 𝗙𝗔𝗡𝗧𝗔𝗦𝗠𝗜𝗡 𝗕𝗢𝗧 👻

*LINK* https://mega.nz/folder/Wfgi3AxC#J8JLtus-jYyFG3HnN_NUlA
`;
