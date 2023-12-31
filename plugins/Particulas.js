const handler = async (m, {conn}) => {
  m.reply(global.Particulas);
};
handler.command = /^(Particulas|particulas|liga)$/i;
export default handler;
handler.admin = true
handler.group = true
handler.botAdmin = true

global.Particulas = `
👻 𝗙𝗔𝗡𝗧𝗔𝗦𝗠𝗜𝗡 𝗕𝗢𝗧 👻

*LINK* https://mega.nz/folder/qOpQwIyK#WUTALXxiSTfyD-O5cpsbcg
`;
