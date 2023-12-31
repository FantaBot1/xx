const handler = async (m, {conn}) => {
  m.reply(global.PsTouch);
};
handler.command = /^(PsTouch|pstouch)$/i;
export default handler;
handler.admin = true
handler.group = true
handler.botAdmin = true

global.PsTouch = `
👻 𝗙𝗔𝗡𝗧𝗔𝗦𝗠𝗜𝗡 𝗕𝗢𝗧 👻

*LINK* https://drive.google.com/file/d/1wXdGQ6bk_A6qlW582BIxu7MtQ0WYO60D/view

`;
