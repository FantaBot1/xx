const handler = async (m, {conn}) => {
  m.reply(global.PapelRoto);
};
handler.command = /^(PapelRoto|papelroto|liga)$/i;
export default handler;
handler.admin = true
handler.group = true
handler.botAdmin = true

global.PapelRoto = `
👻 𝗙𝗔𝗡𝗧𝗔𝗦𝗠𝗜𝗡 𝗕𝗢𝗧 👻

*LINK* https://mega.nz/folder/PPoGHSQL#agfCk7jgP8nvqYsUzedlVA
`;
