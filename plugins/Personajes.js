const handler = async (m, {conn}) => {
  m.reply(global.Personajes);
};
handler.command = /^(Personajes|personajes|liga)$/i;
export default handler;
handler.admin = true
handler.group = true
handler.botAdmin = true

global.Personajes = `
👻 𝗙𝗔𝗡𝗧𝗔𝗦𝗠𝗜𝗡 𝗕𝗢𝗧 👻

*LINK* https://mega.nz/folder/fKAh0SjK#sGYcMWkUQfudm8_DIF1f3g
`;
