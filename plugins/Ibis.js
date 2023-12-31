const handler = async (m, {conn}) => {
  m.reply(global.IbisPaint);
};
handler.command = /^(IbisPaint|ibispaint)$/i;
export default handler;
handler.admin = true
handler.group = true
handler.botAdmin = true

global.IbisPaint = `
👻 𝗙𝗔𝗡𝗧𝗔𝗦𝗠𝗜𝗡 𝗕𝗢𝗧 👻

*LINK* https://play.google.com/store/apps/details?id=jp.ne.ibis.ibispaintx.app

`;
